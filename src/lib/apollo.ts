// Apollo GraphQL client

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import {
  InMemoryCache,
  NormalizedCacheObject,
  IntrospectionFragmentMatcher
} from "apollo-cache-inmemory";
import { camelCase } from 'lodash';
import { ApolloClient } from "apollo-client";
import { ApolloLink, split } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { setContext } from 'apollo-link-context';
import fetch from 'node-fetch';
/* Local */
import { Store } from "@/data/store";
import introspectionQueryResultData from "@/graphql/fragments";
// ----------------------------------------------------------------------------

// Match up fragments
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

export function createClient(
  // @ts-ignore - useful to pass in the store for `Authorization` headers, etc
  store: Store
): ApolloClient<NormalizedCacheObject> {
  // Create the cache first, which we'll share across Apollo tooling.
  // This is an in-memory cache. Since we'll be calling `createClient` on
  // universally, the cache will survive until the HTTP request is
  // responded to (on the server) or for the whole of the user's visit (in
  // the browser)
  const cache = new InMemoryCache({ fragmentMatcher });

  const authLink = setContext((_) => {
    const headers = new Headers();
    const token = sessionStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('X-ProductCode', camelCase('adminWeb') + '@' + '1.0.0');
    headers.set('X-RoleVer', 'latest');
    // console.log('☞☞☞ 9527 gql.controller 51', headers);
    return { headers };
  });

  // Create a HTTP client (both server/client). It takes the GraphQL
  // server from the `GRAPHQL` environment variable, which by default is
  // set to an external playground at https://graphqlhub.com/graphql
  const httpLink = new HttpLink({
    credentials: "same-origin",
    uri: GRAPHQL,
    fetch: fetch,
  });

  // If we're in the browser, we'd have received initial state from the
  // server. Restore it, so the client app can continue with the same data.
  if (!SERVER) {
    cache.restore((window as any).__APOLLO__);
  }

  // Return a new Apollo Client back, with the cache we've just created,
  // and an array of 'links' (Apollo parlance for GraphQL middleware)
  // to tell Apollo how to handle GraphQL requests
  return new ApolloClient({
    cache,
    link: ApolloLink.from([
      // General error handler, to log errors back to the console.
      // Replace this in production with whatever makes sense in your
      // environment. Remember you can use the global `SERVER` variable to
      // determine whether you're running on the server, and record errors
      // out to third-party services, etc
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.map(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        }
        if (networkError) {
          if (!(networkError instanceof TypeError)) {
            console.log((networkError as any).result.errors[0])
          }
          console.log(`[Network error]: ${networkError}`);
        }
      }),
      // Split on HTTP and WebSockets
      WS_SUBSCRIPTIONS && !SERVER
        ? split(
            ({ query }) => {
              const definition = getMainDefinition(query);
              return (
                definition.kind === "OperationDefinition" &&
                definition.operation === "subscription"
              );
            },
            // Use WebSockets for subscriptions
            new WebSocketLink(
              // Replace http(s) with `ws` for connecting via WebSockts
              new SubscriptionClient(
                GRAPHQL.replace(/^https?/, "ws")
                  .replace(/graphql/, "subscriptions"),
                {
                reconnect: false // <-- automatically redirect as needed
              })
            ),
            // ... fall-back to HTTP for everything else
            authLink.concat(httpLink)
          )
        : authLink.concat(httpLink), // <-- just use HTTP on the server
    ]),
    // On the server, enable SSR mode
    ssrMode: SERVER
  });
}
