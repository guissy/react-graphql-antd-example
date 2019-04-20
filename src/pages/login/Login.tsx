import React from 'react';
import { Button, Col, Form, Icon, Input, Layout, Row } from 'antd';
// import environment from '../../utils/environment';
import { FormComponentProps, WrappedFormUtils } from 'antd/es/form/Form';
import { AdminLoginComponent } from "@/graphql";
import * as CryptoJS from 'crypto-js';
import { WithStore, withStore } from '@/lib/store';
import { RouteComponentProps, withRouter } from 'react-router';
import { withRouter as withRouterNext, WithRouterProps } from 'next/router';
// import { withRouter, RouteComponentProps } from 'react-router';
import './Login.less';

interface State {
  email: string;
  password: string;
}

interface Props {
  height: string;
}

@(withRouterNext as any)
@(withRouter as any)
@(withStore as any)
@(Form.create() as any)
class Login extends React.PureComponent<WithRouterProps & RouteComponentProps & WithStore<Props> & FormComponentProps, State> {

  state = {
    email: '',
    password: '',
  };

  componentDidMount(): void {
    setTimeout(() => {
      (document.querySelector('[type=submit]') as any).click();
    }, 50);
  }

  render() {
    const { getFieldDecorator } = this.props.form || ({} as WrappedFormUtils);
    const { height = '' } = this.props;
    const { email, password } = this.state;

    return (
      <div>
        <Layout.Content>
          <Row type="flex" justify="space-around" align="middle" style={{ height: height }}>
            <Col className="col">
              <AdminLoginComponent>
                {(signIn, { loading }) => (
                  <Form
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                      e.preventDefault();
                      this.props.form!.validateFields(async (err: object, values: any) => {
                        if (!err) {
                          const email = CryptoJS.SHA1(values.email).toString();
                          const password = CryptoJS.SHA1(values.password).toString();
                          const result = await signIn({ variables: { email, password } });
                          if (result && result.data) {
                            this.props.store.signIn(result.data.adminLogin);
                            window.sessionStorage.setItem('token', result.data.adminLogin!.loginInfo!.token);
                          }
                          console.log('☞☞☞ 9527 Login 61', this.props);
                          this.props.history!.push('/index');
                          this.props.router!.push('/index');
                        }
                      });
                    }}
                  >
                    <fieldset disabled={loading}>
                      <h2>
                        后台管理系统
                      </h2>
                      <Form.Item hasFeedback={true}>
                        {getFieldDecorator('email', {
                          initialValue: email,
                          rules: [
                            {
                              required: true,
                              message: '请输入用户名'
                            }
                          ]
                        })(
                          <Input
                            prefix={<Icon type="user" />}
                            autoFocus={true}
                            autoComplete="off"
                            placeholder="用户名"
                          />
                        )}
                      </Form.Item>
                      <Form.Item hasFeedback={true}>
                        {getFieldDecorator('password', {
                          initialValue: password,
                          rules: [
                            {
                              required: true,
                              message: '请输入密码'
                            }
                          ]
                        })(
                          <Input
                            prefix={<Icon type="lock" />}
                            type="password"
                            autoComplete="off"
                            placeholder="密码"
                          />
                        )}
                      </Form.Item>
                      <Form.Item className="login-btn-wrap">
                        <Button type="primary" htmlType="submit" loading={loading}>
                          登录
                        </Button>
                      </Form.Item>
                    </fieldset>
                  </Form>
                )}
              </AdminLoginComponent>
            </Col>
          </Row>
        </Layout.Content>
      </div>
    );
  }
}

export default Login;
