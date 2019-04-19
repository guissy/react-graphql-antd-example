// Server entrypoint

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

// Implement a global `fetch()` polyfill, for Apollo requests
import "cross-fetch/polyfill";

// React for UI
import React from "react";

// The `Context` type for the Koa HTTP server
import { Context } from "koa";

// Apollo GraphQL
import { ApolloProvider, getDataFromTree } from "react-apollo";

// MobX state management
import { toJS } from "mobx";

// React utility to transform JSX to HTML (to send back to the client)
import * as ReactDOMServer from "react-dom/server";

// <Helmet> component for retrieving <head> section, so we can set page
// title, meta info, etc along with the initial HTML
import Helmet from "react-helmet";

// React SSR routers
import { StaticRouter } from "react-router";

// MobX provider
import { Provider } from "mobx-react";

/* Local */

// Root component
import Index from "@/pages/root";

// Utility for creating a per-request Apollo client
import { createClient } from "@/lib/apollo";

// State class, containing all of our user-land state fields
import { Store } from "@/data/store";

// Class for handling Webpack stats output
import Output from "@/lib/output";

// Every byte sent back to the client is React; this is our main template
import Html from "@/views/ssr";

// ----------------------------------------------------------------------------

// Types
export interface IRouterContext {
  status?: number;
  url?: string;
}

// Everything from this point will be Webpack'd and dumped in `dist/server.js`
// and then loaded into an active Koa server
export default function(output: Output) {
  // Create Koa middleware to handle React requests
  return async (ctx: Context) => {
    // Create new MobX store
    const store = new Store();

    // Create a new Apollo client
    const client = createClient(store);

    // Create a fresh 'context' for React Router
    const routerContext: IRouterContext = {};

    // Render our components - passing down MobX state, a GraphQL client,
    // and a router for rendering based on our route config
    const components = (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <StaticRouter location={ctx.request.url} context={routerContext}>
            <Index />
          </StaticRouter>
        </ApolloProvider>
      </Provider>
    );

    // Await GraphQL data coming from the API server
    await getDataFromTree(components);

    // Handle 301/302 redirects
    if ([301, 302].includes(routerContext.status!)) {
      // 301 = permanent redirect, 302 = temporary
      ctx.status = routerContext.status!;

      // Issue the new `Location:` header
      ctx.redirect(routerContext.url!);

      // Return early -- no need to set a response body
      return;
    }

    // Handle 404 `Not Found`
    if (routerContext.status === 404) {
      // By default, just set the status code to 404. You can
      // modify this section to do things like log errors to a
      // third-party, or redirect users to a dedicated 404 page

      ctx.status = 404;
      ctx.body = "Not found";

      return;
    }

    // Create response HTML
    const html = ReactDOMServer.renderToString(components);

    // Create the React render, and inject the `<head>` section
    // courtesy of React Helmet.
    const reactRender = ReactDOMServer.renderToString(
      <Html
        css={output.client.main("css")!}
        helmet={Helmet.renderStatic()}
        html={html}
        scripts={output.client.scripts()}
        window={{
          __APOLLO__: client.extract(), // <-- GraphQL store
          __STORE__: toJS(store) // <-- MobX store
        }}
      />
    );

    // Set the return type to `text/html`, and dump the response back to
    // the client
    ctx.type = "text/html";
    ctx.body = `<!DOCTYPE html>${reactRender}`;
  };
}
