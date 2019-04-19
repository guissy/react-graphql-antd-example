import React from "react";
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
import BasicLayout from '@/layouts/BasicLayout';

const Index = () => (
  <div>
    <Global styles={globalStyles}/>
    <Helmet>
      <title>流动性比利润更重要！</title>
    </Helmet>
    <ScrollTop>
      <Switch>
        <BasicLayout />
      </Switch>
    </ScrollTop>
  </div>
);

export default Index;
