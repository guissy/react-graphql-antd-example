import React from 'react'
import Head from 'next/head'
import { getDataFromTree } from 'react-apollo'
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import fetch from 'node-fetch'
import * as Process from 'process';

let apolloClient: ApolloClient<any> = null as any;

declare const process: typeof Process & {
  browser: boolean;
}

function create (initialState: {}) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'http://127.0.0.1:4002/graphql', // Server URL (must be absolute)
      // credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      // Use fetch() polyfill on the server
      fetch: !process.browser && fetch as any
    }),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

function initApollo (initialState = {}) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient;
}

export default function withApolloClient(App: any) {
  return class Apollo extends React.Component {
    static displayName = 'withApollo(App)'
    apolloClient: ApolloClient<any>;
    static async getInitialProps (ctx: any) {
      const { Component, router } = ctx;

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo();
      if (!process.browser) {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
                {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />
        )
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error)
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();
      return {
        ...appProps,
        apolloState,
        url: ctx.ctx.req ? ctx.ctx.req.url : '/',
      }
    }

    constructor (props: any) {
      super(props);
      this.apolloClient = initApollo(props.apolloState)
    }

    render () {
      return <App {...this.props} apolloClient={this.apolloClient} />
    }
  }
}