import { action, observable,  } from "mobx";
import { Admin, AuthInfo, LoginInfo } from '@/graphql';

export class Store {
  @observable count = 0;
  @observable loginInfo = {} as LoginInfo;
  @observable authInfo = {} as AuthInfo;
  @observable admin = {} as Partial<Admin>;
  @observable setting = {
    navTheme:'dark',
    layout: 'topmenu',
    fixedHeader: true,
    fixSiderbar: true,
    collapsed: false,
  } as any;
  @observable menu = {
    menuData: [],
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
  @action signIn = (adminLogin: {admin: Partial<Admin>, authInfo:AuthInfo, loginInfo: LoginInfo} | null) => {
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
