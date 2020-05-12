/*
 * @Author: 吴文洁
 * @Date: 2020-04-29 17:08:08
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-12 17:19:02
 * @Description: 
 */
import http from '@/common/service/http';
import { Store } from 'antd/lib/form/interface';
// import { Article } from '@/domains/article/interface';

export const createArticle = (data: Store) => {
  return http.post('http://localhost:5000/article', data);
}