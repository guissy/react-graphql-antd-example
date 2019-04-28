import React from "react";
import Helmet from "react-helmet";
import { Provider } from 'mobx-react';
import { StaticRouter, Switch } from "react-router-dom";
import { ApolloProvider } from 'react-apollo';
import App from 'next/app'
import Head from 'next/head';
import { Global } from "@emotion/core";

import ScrollTop from "@/pages/helpers/scrollTop";
import globalStyles from "@/global/styles";
import { Store } from '@/data/store';
import { createClient } from '@/lib/apollo';
import withApolloClient from '@/data/with-apollo-client';


// export default Index;

const store = new Store();

// Create a new Apollo client
const client = createClient(store);

class MyApp extends App<{url: string}> {
  render() {
    const { Component, pageProps, url = '/' } = this.props;
    console.log('☞☞☞ 9527 index 58', url);
    return (
      <>
        <Provider store={store}>
          <ApolloProvider client={client}>
            <StaticRouter location={url} context={{}}>
              <div>
                <Global styles={globalStyles}/>
                <Helmet>
                  <title>🌈🌈🌈🌸🌸🌸🌺🌺🌺🌹🌹🌹🌷🌷🌷🍇🍇🍇🍉🍉🍉💯💯💯✅✅✅❌❌❌⚠️⚠️⚠️</title>
                </Helmet>
                <ScrollTop>
                  <Switch>
                    <Component {...pageProps} />
                  </Switch>
                </ScrollTop>
              </div>
            </StaticRouter>
          </ApolloProvider>
        </Provider>
      </>
    )
  }
}

// components.getInitialProps = async ({ req }) => {
//   return { url: req.url }
// }


export default withApolloClient(MyApp)