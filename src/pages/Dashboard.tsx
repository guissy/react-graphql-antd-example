import React from "react";
import { Card } from "antd";
import BasicLayout from '@/layouts/BasicLayout';
import { Global } from "@emotion/core";
import globalStyles from "@/global/styles";
import styled from "@emotion/styled";
import { withStore } from "@/lib/store";
import { Store } from "@/data/store";
import { DashboardComponent } from "@/graphql";
import { css } from "emotion";

const CardWrap = styled(Card)`

  color: #fff;
  font-weight: bord;
  margin: 0 10px 10px 0;
  text-align: center;
  .ant-card-body {
    padding: 0;
    p:nth-child(1) {
    margin-top: 10px;
    font-size: 30px;
    margin-bottom: 5px;
    }
    p:nth-child(2) {
      margin-bottom: 10px;
      font-size: 16px;
    }
  }
  &:nth-child(1) {
    background: #2ec95c;
  }
  &:nth-child(2) {
    background: #3fc7eb;
  }
  &:nth-child(3) {
    background: #427feb;
  }
  &:nth-child(4) {
    background: #a64ceb;
  }
  &:nth-child(5) {
    background: #c92a2a;
  }
  &:nth-child(6) {
    background: #a61e4d;
  }
  &:nth-child(7) {
    background: #862e9c;
  }
  &:nth-child(8) {
    background: #5f3dc4;
  }
  &:nth-child(9) {
    background: #364fc7;
  }
  &:nth-child(10) {
    background: #1864ab;
  }
`;

interface Props {
  store: Store;
}

@(withStore as any)
export default class Dashboard extends React.Component<Props> {
  componentDidMount() {
    const {  } = this.props.store;
  }
  render() {
    return (
      <div>
        <Global styles={globalStyles}/>
        <DashboardComponent>
          {({data}) => data && data.dashboard ? (
            <BasicLayout>
              <div className={css`
              `}>
                <section className={css`
                  display: inline-grid;
                  width: calc(100% - 240px);
                  grid-template-columns: 20% 20% 20% 20% 20%;
                `}>
                  <CardWrap>
                    <p>{data!.dashboard!.garden!.total}</p>
                    <p>机构</p>
                  </CardWrap>
                  <CardWrap>
                    <p>{data!.dashboard!.app!.total}</p>
                    <p>App</p>
                  </CardWrap>
                  <CardWrap>
                    <p>{data!.dashboard!.banner!.total}</p>
                    <p>Banner</p>
                  </CardWrap>
                  <CardWrap>
                    <p>{data!.dashboard!.feedback!.total}</p>
                    <p>用户反馈</p>
                  </CardWrap>
                  <CardWrap>
                    <p>{data!.dashboard!.album!.total}</p>
                    <p>专辑内容</p>
                  </CardWrap>
                  <CardWrap>
                    <p>{data!.dashboard!.training!.total}</p>
                    <p>班级</p>
                  </CardWrap>
                  <CardWrap>
                    <p>{data!.dashboard!.user!.total}</p>
                    <p>家长</p>
                  </CardWrap>
                  <CardWrap>
                    <p>{data!.dashboard!.kid!.total}</p>
                    <p>学生</p>
                  </CardWrap>
                  <CardWrap>
                    <p>{data!.dashboard!.device!.total}</p>
                    <p>设备</p>
                  </CardWrap>
                  <CardWrap>
                    <p>{data!.dashboard!.admin!.total}</p>
                    <p>管理员</p>
                  </CardWrap>
                </section>
                <section className={css`width: 240px; display: inline-block;`}>
                  流动性比利润更重要！
                </section>
              </div>
            </BasicLayout>
          ) : 'loading...'}
        </DashboardComponent>
      </div>
    )
  }
}