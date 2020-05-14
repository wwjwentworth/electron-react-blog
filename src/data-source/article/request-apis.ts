/*
 * @Author: 吴文洁
 * @Date: 2020-04-29 17:08:08
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-14 14:45:16
 * @Description: 
 */
import http from '@/common/service/http';
import { HOST } from '@/domains/basic/constants';
import { Store } from 'antd/lib/form/interface';
import { RcFile } from 'antd/lib/upload/interface';

export const createArticle = (data: Store) => {
  return http.post(`${HOST}/article`, data);
}

export const getArticles = () => {
  return http.get(`${HOST}/article`);
}

export const uploadCover = (file: RcFile) => {
  return http.post(`${HOST}/article/upload`, file);
}