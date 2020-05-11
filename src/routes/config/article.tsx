/*
 * @Author: 吴文洁
 * @Date: 2020-04-29 10:26:32
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-11 19:39:45
 * @Description: 内容线路由配置
 */
import React from 'react';
import { HomeOutlined } from '@ant-design/icons';

import { DomainConfig } from '@/routes/interface';
import ArticleManage from '@/modules/article/ArticleManage';
import ArticleTag from '@/modules/article/ArticleTag';
import CreateArticle from '@/modules/article/CreateArticle';

const ArticleConfig: DomainConfig = {
  key: 'article',
  name: '文章相关',
  menuConfig: {
    key: 'article',
    title: '文章中心',
    iconType: <HomeOutlined />,
  },
  routes: [
    {
      showAside: false,
      key: 'article-manage-create',
      title: '新增/编辑文章',
      path: '/article/manage/create/:key',
      loader: () => import('@/modules/article/CreateArticle'),
      component: CreateArticle,
      exact: true,
    },
    {
      showAside: true,
      key: 'article-manage',
      title: '文章管理',
      path: '/article/manage',
      loader: () => import('@/modules/article/ArticleManage'),
      component: ArticleManage,
      exact: true,
    },
    
    {
      showAside: true,
      key: 'article-tag',
      title: '标签管理',
      path: '/article_tag',
      loader: () => import('@/modules/article/ArticleTag'),
      component: ArticleTag
    }
  ]
};

export default ArticleConfig;