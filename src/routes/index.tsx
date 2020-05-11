/*
 * @Author: 吴文洁
 * @Date: 2020-04-28 18:05:30
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-11 19:30:54
 * @Description: 
 */
import React from 'react';
import { HomeOutlined } from '@ant-design/icons';

import { DomainConfig, RouteConfig } from '@/routes/interface';
import Article from './config/article'
import Marketing from './config/marketing';

import Home from '@/modules/home';

// 领域路由配置
export const domainMenuConfigs: DomainConfig[] = [ Article, Marketing ].map((domain: DomainConfig) => {
  const { menuConfig, routes } = domain;
  
  // 筛选出showAside为true的路由配置
  return ({
    ...domain,
    routes:  menuConfig && menuConfig.route && menuConfig.route.showAside ? [menuConfig.route] : routes
  });
})

// 首页路由配置（不属于任何一个领域）
export const crossDomainRoute: RouteConfig[] = [
  {
    showAside: true,
    key: 'home',
    title: '首页',
    path: '/home',
    iconType: <HomeOutlined />,
    loader: () => import('@/modules/home'),
    component: Home
  }
].filter((route: RouteConfig) => route.showAside);


/** 所有处理后的路由的集合,用于生成Route组件 */
export const allRoutes: RouteConfig[] = domainMenuConfigs.map((doamin: DomainConfig) => {
  return doamin.routes as RouteConfig[];
}).reduce((prev: RouteConfig[], next: RouteConfig[]) => {
  return [...prev, ...next]
}, crossDomainRoute);