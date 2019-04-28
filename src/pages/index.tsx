import React from "react";
import Helmet from "react-helmet";
import { Redirect, Route, StaticRouter, Switch } from "react-router-dom";
import { Global } from "@emotion/core";
import ScrollTop from "@/pages/helpers/scrollTop";
import globalStyles from "@/global/styles";
import BasicLayout from '@/layouts/BasicLayout';
import Abc from "./Dashboard2/Abc";

const Index = () => (
  <div>
    <Global styles={globalStyles}/>
    <Helmet>
      <title>首页</title>
    </Helmet>
    <ScrollTop>
      <Switch>
        <BasicLayout>
          {/* <Abc /> */}
        </BasicLayout>
      </Switch>
    </ScrollTop>
  </div>
);

export default Index;
