import React from 'react';
import { Layout } from 'antd';
// @ts-ignore
import DocumentTitle from 'react-document-title';
// import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import Media from 'react-media';
import logo from '../assets/logo.svg';
import Header from './Header';
import Context from './MenuContext';
import SiderMenu from '@/components/SiderMenu';
// @ts-ignore
import getPageTitle from '@/utils/getPageTitle';
import { withStore } from '@/lib/store';
import { withRouter, WithRouterProps } from 'next/router';
import Abc from '@/pages/Dashboard/Abc';
import { StoreProps } from '@/data/store';
import { css } from 'emotion';

// lazy load SettingDrawer
// @ts-ignore
const SettingDrawer = React.lazy(() => import('@/components/SettingDrawer'));

const { Content } = Layout;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};

interface Props {
  store: StoreProps,
  isMobile: boolean;
  location: any;
}

interface State {

}

@(withRouter as any)
class BasicLayout extends React.Component<Props & WithRouterProps, State> {
  componentDidMount() {
    const { router, store } = this.props;
    console.log('☞☞☞ 9527 BasicLayout 81', store.loginInfo.token);
    if (!store.loginInfo.token) {
      router!.push('/login/login');
    }
  }

  getContext() {
    const { location, store } = this.props;
    return {
      location,
      breadcrumbNameMap: store.menu.breadcrumbNameMap,
    };
  }

  getLayoutStyle = () => {
    const { isMobile } = this.props;
    const { fixSiderbar, layout, collapsed } = this.props.store.setting;
    if (fixSiderbar && layout !== 'topmenu' && !isMobile) {
      return {
        paddingLeft: collapsed ? '80px' : '180px',
      };
    }
    return null;
  };

  handleMenuCollapse = (collapsed: boolean) => {
    console.log('☞☞☞ 9527 BasicLayout 100', collapsed);
    this.props.store.setCollapsed(collapsed);
    // const { dispatch } = this.props;
    // dispatch({
    //   type: 'global/changeLayoutCollapsed',
    //   payload: collapsed,
    // });
  };

  renderSettingDrawer = () => {
    // Do not render SettingDrawer in production
    // unless it is deployed in preview.pro.ant.design as demo
    // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
    if (
      process.env.NODE_ENV === 'production'
    ) {
      return null;
    }
    return <SettingDrawer/>;
  };

  render() {
    const { menu = {}, } = this.props.store;
    const { children, isMobile } = this.props;
    const { collapsed, navTheme, fixedHeader, layout: PropsLayout } = this.props.store.setting;
    const { location: { pathname } } = this.props;

    const isTop = PropsLayout === 'topmenu';
    const contentStyle = !fixedHeader ? { paddingTop: 0 } : {};
    const layout = (
      <Layout>
        {isTop && !isMobile ? null : (
          <SiderMenu
            logo={logo}
            theme={navTheme}
            onCollapse={this.handleMenuCollapse}
            menuData={menu.menuData}
            isMobile={isMobile}
            collapsed={collapsed}
            {...this.props}
          />
        )}
        <Layout
          style={{
            ...this.getLayoutStyle(),
            minHeight: '100vh',
          }}
        >
          <Header
            handleMenuCollapse={this.handleMenuCollapse}
            isMobile={isMobile}
            {...this.props}
          />
          <Content
            className={css`
              margin: 24px;
              padding-top: var(--layout-header-height);
            `}
            style={contentStyle}>
            {children}
            <Abc/>
          </Content>
        </Layout>
      </Layout>
    );
    return (
      <React.Fragment>
        <DocumentTitle title={getPageTitle(pathname, menu.breadcrumbNameMap)}>
          <ContainerQuery query={query}>
            {params => (
              <Context.Provider value={this.getContext()}>
                <div className={classNames(params)}>{layout}</div>
              </Context.Provider>
            )}
          </ContainerQuery>
        </DocumentTitle>
        {/*<React.Suspense fallback={null}>{this.renderSettingDrawer()}</React.Suspense>*/}
      </React.Fragment>
    );
  }
}

// ({ global, setting, menu: menuModel }) => ({
//   collapsed: global.collapsed,
//   layout: setting.layout,
//   menuData: menuModel.menuData,
//   breadcrumbNameMap: menuModel.breadcrumbNameMap,
//   ...setting,
// })
export default withStore(((props: any) => (
  <Media query="(max-width: 599px)">
    {isMobile => <BasicLayout {...props} isMobile={isMobile}/>}
  </Media>
)))
