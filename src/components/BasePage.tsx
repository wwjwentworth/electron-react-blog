/*
 * @Author: 吴文洁
 * @Date: 2020-05-11 16:36:53
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-11 17:12:37
 * @Description: 
 */

import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Breadcrumb } from 'antd';

interface BasePageProps extends RouteComponentProps {
  firstRoute: {
    name: string ;
    path: string
  },
  secondRoute?: {
    name: string;
    path?: string
  }
}

interface BasePageState {};

class BasePage extends React.Component<BasePageProps, BasePageState> {

  handleLinkToFirstRoute = () => {
    const { firstRoute } = this.props;
    this.props.history.push(firstRoute.path);
  }
  render() {
    const { firstRoute, secondRoute } = this.props;
    return (
      <div className="basic-page">
        <Breadcrumb>
          <Breadcrumb.Item
            onClick={this.handleLinkToFirstRoute}
          >
            {firstRoute.name}
          </Breadcrumb.Item>
          <If condition={!!secondRoute}>
            <Breadcrumb.Item>{secondRoute!.name}</Breadcrumb.Item>
          </If>
        </Breadcrumb>
        { this.props.children }
      </div>
    )
  }
}

export default withRouter(BasePage);