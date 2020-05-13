/*
 * @Author: 吴文洁
 * @Date: 2020-04-29 17:08:08
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-13 15:58:12
 * @Description: 
 */
import http from '@/common/service/http';
import { Store } from 'antd/lib/form/interface';

export const createArticle = (data: Store) => {
  return http.post('http://localhost:5000/article', data);
}