/*
 * @Author: 吴文洁
 * @Date: 2020-04-28 18:09:25
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-11 19:40:41
 * @Description: 页面通用侧边栏组件
 */
import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { RouteConfig, DomainConfig } from '@/routes/interface';
import { domainMenuConfigs, crossDomainRoute } from '@/routes';

const { Sider } = Layout;
const { SubMenu } = Menu;

interface AsideProps extends RouteComponentProps {};
interface AsideState {
  collapsed: boolean;
}
interface DefaultMenuState {
  defaultOpenKeys: string[],
  defaultSelectedKeys: string[]
};

class Aside extends React.Component<AsideProps, AsideState> {
  state: AsideState = {
    collapsed: false,
  }

  handleCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  }

  // url和菜单的key需要对应，才能使菜单初始状态正确
  // 例如url中路径为/a/b，则menu和submenu的key应当分别为a和b
  getDefaultMenuState = () => {
    const { location } = this.props;
    const { collapsed } = this.state;
    const [, menu, submenu] = location.pathname.split('/');
    return {
      defaultOpenKeys: collapsed ? [] : [menu],
      defaultSelectedKeys: [menu, `${menu}-${submenu}`],
    };
  }

  renderMenu = () => {
    const _domainMenuConfigs = domainMenuConfigs.map((domain: DomainConfig) => {
      const { routes } = domain;
      const _routes = routes.filter((route: RouteConfig) => route.showAside)
      return {
        ...domain,
        routes: _routes
      }
    })
    return _domainMenuConfigs.map(({ menuConfig, routes}) => {
      return (
        <Choose>
          <When condition={!!(menuConfig && menuConfig.route)}>
            <Menu.Item key={menuConfig!.key}>
              {menuConfig!.iconType}
              <Link to={routes[0].path!}>{menuConfig!.title}</Link>
            </Menu.Item>
          </When>
          <Otherwise>
            <SubMenu
              key={menuConfig!.key}
              title={
                <span>
                  {menuConfig!.iconType}
                  <span>{menuConfig!.title}</span>
                </span>
              }
            >
              {
                routes.map((route: RouteConfig) => (
                  <Menu.Item
                    key={route.key}
                  >
                    <Link to={route.path!}>{route.title}</Link>
                  </Menu.Item>
                ))
              }
            </SubMenu>
          </Otherwise>
        </Choose>
      ) 
    });
  }
  
  render() {
    const { collapsed } = this.state;
    const defaultMenuState: DefaultMenuState = this.getDefaultMenuState();

    const homeRoute = crossDomainRoute.find(route => route.key === 'home');
    return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={this.handleCollapse}
      >
        <Menu
          defaultOpenKeys={defaultMenuState.defaultOpenKeys}
          defaultSelectedKeys={defaultMenuState.defaultSelectedKeys}
          mode="inline"
          theme="dark"
        >
          <Menu.Item  key={homeRoute!.key}>
            <Link to={homeRoute!.path!}>
              {homeRoute!.iconType}
              <span>{homeRoute!.title}</span>
            </Link>
          </Menu.Item>
          { this.renderMenu() }
        </Menu>
      </Sider>
    )
  }
}

export default withRouter(Aside);