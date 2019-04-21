import React from 'react';
import { formatMessage } from '@/components/locale/FormattedMessage';
import { Layout, message } from 'antd';
import Animate from 'rc-animate';
import GlobalHeader from '@/components/GlobalHeader';
import TopNavHeader from '@/components/TopNavHeader';
import styles from './Header.less';
import { Component } from 'react';
import { withStore } from '@/lib/store';
import { withRouter } from 'react-router';

const { Header } = Layout;

@(withRouter as any)
class HeaderView extends Component {
  state = {
    visible: true,
  };
  oldScrollTop: number = 0;

  static getDerivedStateFromProps(props, state) {
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
    return collapsed ? 'calc(100% - 80px)' : 'calc(100% - 180px)';
  };

  handleNoticeClear = type => {
    message.success(
      `${formatMessage({ id: 'component.noticeIcon.cleared' })} ${formatMessage({
        id: `component.globalHeader.${type}`,
      })}`
    );
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
    const isTop = layout === 'topmenu';
    const width = this.getHeadWidth();
    const HeaderDom = visible ? (
      <Header
        style={{ padding: 0, width, zIndex: 2 }}
        className={fixedHeader ? styles.fixedHeader : ''}
      >
        {isTop && !isMobile ? (
          <TopNavHeader
            theme={navTheme}
            mode="horizontal"
            onCollapse={handleMenuCollapse}
            onNoticeClear={this.handleNoticeClear}
            onMenuClick={this.handleMenuClick}
            onNoticeVisibleChange={this.handleNoticeVisibleChange}
            {...this.props}
          />
        ) : (
          <GlobalHeader
            onCollapse={handleMenuCollapse}
            onNoticeClear={this.handleNoticeClear}
            onMenuClick={this.handleMenuClick}
            onNoticeVisibleChange={this.handleNoticeVisibleChange}
            {...this.props}
          />
        )}
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
export default withStore(HeaderView);
