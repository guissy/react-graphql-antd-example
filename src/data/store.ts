import { action, observable, } from "mobx";
import { Admin, AuthInfo, LoginInfo } from '@/graphql';

export class Store {
  @observable count = 0;
  @observable loginInfo = {} as LoginInfo;
  @observable authInfo = {} as AuthInfo;
  @observable admin = {} as Partial<Admin>;
  @observable setting = {
    navTheme: 'dark',
    layout: 'sidemenu',
    fixedHeader: true,
    fixSiderbar: true,
    collapsed: false,
  } as any;
  @observable title = '后台管理系统';
  @observable menu = {
    menuData: [
      { name: '首页', path: '/dashboard', icon: 'dashboard' },
      {
        name: '用户账号',
        icon: 'crown',
        children: [
          { name: '用户账号', path: '/user', icon: 'crown' },
          { name: '操作日志', path: '/userLog', icon: 'crown' },
          { name: '用户反馈', path: '/feedback', icon: 'crown' },
        ]
      },
      {
        name: '系统管理',
        icon: 'rocket',
        children: [
          { name: '管理员', path: '/admin', icon: 'rocket' },
          { name: '权限设置', path: '/permission', icon: 'rocket' },
        ]
      },
    ],
    breadcrumbNameMap: []
  } as any;
  @observable route = {
    routes: [],
    path: '/',
    authority: ['admin'],
  };
  @observable user = {
    currentUser: {}
  };
  @observable loading = {
    fetchingMoreNotices: false,
    fetchingNotices: false,
    notices: []
  };
  @action signIn = (adminLogin: { admin: Partial<Admin>, authInfo: AuthInfo, loginInfo: LoginInfo } | null) => {
    if (adminLogin) {
      this.loginInfo = adminLogin.loginInfo;
      this.authInfo = adminLogin.authInfo;
      this.admin = adminLogin.admin;
    }
  }
  @action public increment = () => {
    this.count = this.count + 1;
  };
  @action public decrement = () => {
    --this.count;
  };
}
