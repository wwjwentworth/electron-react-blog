/*
 * @Author: 陈剑宇
 * @Date: 2020-05-07 17:04:44
 * @LastEditTime: 2020-05-07 17:22:37
 * @LastEditors: 陈剑宇
 * @Description: RootRoutes
 * @FilePath: /wheat-web-demo/src/routes/RootRoutes.tsx
 * @Copyright © 2020 杭州杰竞科技有限公司 版权所有
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteConfig } from '@/routes/interface';
import App from '@/App';
import Login from '@/modules/login/index';

const ROOT_ROUTES_MAP: RouteConfig[] = [
  {
    key: 'login',
    title: '登录',
    path: '/login',
    component: Login
  },
  {
    key: 'home',
    title: '主页面',
    path: '/',
    component: App
  }
]

const RootRoutes: () => JSX.Element = () => <Switch>
  {
    ROOT_ROUTES_MAP.map((route: RouteConfig): JSX.Element => <Route key={route.key} path={route.path} component={route.component} />)
  }
</Switch>

export default RootRoutes;