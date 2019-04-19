import * as React from "react";
import Helmet from "react-helmet";
import { Redirect, Route, StaticRouter, Switch } from "react-router-dom";
import { Global } from "@emotion/core";
import ScrollTop from "@/pages/helpers/scrollTop";
import globalStyles from "@/global/styles";
import routes from "@/data/routes";
import { Store } from '@/data/store';
import { createClient } from '@/lib/apollo';
import { Provider } from 'mobx-react';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import Head from 'next/head';

const Index = () => (
  <div>
    <Global styles={globalStyles}/>
    <Helmet>
      <title>流动性比利润更重要！</title>
    </Helmet>
    <ScrollTop>
      <Switch>
        {routes.map((route1: any, i: number) => (
          route1.redirect
            ?
            <Redirect key={i} to={route1.redirect} {...route1} />
            :
            (<Route key={route1.path} {...route1}>
              {
                route1.children && (route1.children as any).map((route2: any, i: number) => (
                  route2.redirect ?
                    <Redirect key={i} to={route2.redirect} {...route2} />
                    :
                    (<Route key={i} {...route2}>
                      {route2.children && (route2.children as any).map((route3: any, i: number) => (
                        <Route key={i} {...route3} />
                      ))}
                    </Route>)
                ))
              }
            </Route>)
        ))}
      </Switch>
    </ScrollTop>
  </div>
);

// export default Index;

const store = new Store();

// Create a new Apollo client
const client = createClient(store);


// Render our components - passing down MobX state, a GraphQL client,
// and a router for rendering based on our route config
const components = ({ url }: any) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        {/*<link rel='stylesheet' href='/_next/static/style.css' />*/}
      </Head>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <StaticRouter location={url} context={{}}>
            <Index/>
          </StaticRouter>
        </ApolloProvider>
      </Provider>
    </>
  )
};

components.getInitialProps = async ({ req }) => {
  return { url: req.url }
}

// Await GraphQL data coming from the API server
getDataFromTree(components);

export default components;
