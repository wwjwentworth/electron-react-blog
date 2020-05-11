/*
 * @Author: 吴文洁
 * @Date: 2020-04-28 18:09:30
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-07 22:19:12
 * @Description: 页面头部通用组件
 */
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons'
import { Menu, Dropdown } from 'antd';

interface HeaderProps extends RouteComponentProps {};
interface HeaderState {}
class Header extends React.Component<HeaderProps, HeaderState> {
  handleChangePwd = () => {
    //
  }
  handleLoginOut = () => {
    this.props.history.push('/login')
  }
  
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <span onClick={() => this.handleChangePwd()}>修改密码</span>
        </Menu.Item>
        <Menu.Item>
          <span onClick={this.handleLoginOut}>退出登录</span>
        </Menu.Item>
      </Menu>
    )
    return(
      <div className="header flex">
        <div className="header__left flex">
          <img
            className="logo"
            src="https://image.xiaomaiketang.com/xm/dKQ4AYwk5y.png"
            alt="xmzj"
          />
          <span className="name">博客管理系统</span>
        </div>
        <div className="header__right">
          <Dropdown overlay={menu} >
            <div className="user-info flex">
              <UserOutlined />
              <div className="user-info__name">吴文洁</div>
            </div>
          </Dropdown>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);