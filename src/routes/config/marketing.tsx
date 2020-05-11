/*
 * @Author: 吴文洁
 * @Date: 2020-04-29 10:26:01
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-07 13:32:54
 * @Description: 营销线路由配置
 */
import React from 'react';
import { HomeOutlined } from '@ant-design/icons';

import { DomainConfig } from '@/routes/interface';
import Page1 from '@/modules/marketing/Page1';
import Page2 from '@/modules/marketing/Page2';

const MarketingConfig: DomainConfig = {
  key: 'marketing',
  name: '营销相关',
  menuConfig: {
    key: 'marketing',
    title: '营销中心',
    iconType: <HomeOutlined />,
  },
  routes: [
    {
      key: 'marketing-page1',
      title: '页面1',
      path: '/marketing/page1',
      loader: () => import('@/modules/marketing/Page1'),
      component: Page1
    },
    {
      key: 'marketing-page2',
      title: '页面2',
      path: '/marketing/page2',
      loader: () => import('@/modules/marketing/Page2'),
      component: Page2
    }
  ]
};

export default MarketingConfig;