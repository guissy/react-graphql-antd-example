import React, { Component } from 'react';
import { Layout } from 'antd';
// @ts-ignore
import Animate from 'rc-animate';
import GlobalHeader from './GlobalHeader';
import styles from './Header.less';
import { withStore } from '@/lib/store';
import { withRouter } from 'react-router';
import { WithRouterProps } from 'next-server/router';
import { StoreProps } from '@/data/store';

const { Header } = Layout;

interface Props {
  handleMenuCollapse: (collapsed: boolean) => void;
  autoHideHeader?: boolean;
  isMobile?: boolean;
  store: StoreProps;
}

@(withRouter as any)
@(withStore as any)
class HeaderView extends Component<Props & WithRouterProps> {
  state = {
    visible: true,
  };
  oldScrollTop: number = 0;
  ticking: boolean = false;

  static getDerivedStateFromProps(props: Props, state: any) {
    if (!props.autoHideHeader && !state.visible) {
      return {
        visible: true,
      };
    }
    return null;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handScroll, { passive: true });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handScroll);
  }

  getHeadWidth = () => {
    const { isMobile } = this.props;
    const { fixedHeader, layout, collapsed } = this.props.store.setting;
    if (isMobile || !fixedHeader || layout === 'topmenu') {
      return '100%';
    }
    // return collapsed ? 'calc(100% - 80px)' : 'calc(100% - 180px)';
    return '';
  };

  handleNoticeClear = (type: any) => {
    // message.success(
    //   `${formatMessage({ id: 'component.noticeIcon.cleared' })} ${formatMessage({
    //     id: `component.globalHeader.${type}`,
    //   })}`
    // );
    // const { dispatch } = this.props;
    // dispatch({
    //   type: 'global/clearNotices',
    //   payload: type,
    // });
  };

  handleMenuClick = ({ key }) => {
    const { dispatch, history } = this.props;
    if (key === 'userCenter') {
      history.push('/account/center');
      return;
    }
    if (key === 'triggerError') {
      history.push('/exception/trigger');
      return;
    }
    if (key === 'userinfo') {
      history.push('/account/settings/base');
      return;
    }
    if (key === 'logout') {
      dispatch({
        type: 'login/logout',
      });
    }
  };

  handleNoticeVisibleChange = visible => {
    if (visible) {
      // const { dispatch } = this.props;
      // dispatch({
      //   type: 'global/fetchNotices',
      // });
    }
  };

  handScroll = () => {
    const { autoHideHeader } = this.props;
    const { visible } = this.state;
    if (!autoHideHeader) {
      return;
    }
    const scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
    if (!this.ticking) {
      this.ticking = true;
      requestAnimationFrame(() => {
        if (this.oldScrollTop > scrollTop) {
          this.setState({
            visible: true,
          });
        } else if (scrollTop > 300 && visible) {
          this.setState({
            visible: false,
          });
        } else if (scrollTop < 300 && !visible) {
          this.setState({
            visible: true,
          });
        }
        this.oldScrollTop = scrollTop;
        this.ticking = false;
      });
    }
  };

  render() {
    const { isMobile, handleMenuCollapse } = this.props;
    const { navTheme, layout, fixedHeader } = this.props.store.setting;
    const { visible } = this.state;
    const width = this.getHeadWidth();
    const HeaderDom = visible ? (
      <Header
        style={{ padding: 0, width, zIndex: 2 }}
        className={fixedHeader ? styles.fixedHeader : ''}
      >
        <GlobalHeader
          onCollapse={handleMenuCollapse}
          onNoticeClear={this.handleNoticeClear}
          onMenuClick={this.handleMenuClick}
          onNoticeVisibleChange={this.handleNoticeVisibleChange}
          {...this.props}
        />
      </Header>
    ) : null;
    return (
      <Animate component="" transitionName="fade">
        {HeaderDom}
      </Animate>
    );
  }
}

// ({ user, global, setting, loading }) => ({
//   currentUser: user.currentUser,
//   collapsed: global.collapsed,
//   fetchingMoreNotices: loading.effects['global/fetchMoreNotices'],
//   fetchingNotices: loading.effects['global/fetchNotices'],
//   notices: global.notices,
//   setting,
// })
export default HeaderView;
