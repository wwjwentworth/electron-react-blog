/*
 * @Author: 吴文洁
 * @Date: 2020-04-29 17:17:20
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-14 16:32:54
 * @Description: 
 */
import { Store } from 'antd/lib/form/interface';
import { RcFile } from 'antd/lib/upload/interface';
import {
  createArticle,
  getArticles,
  uploadCover
} from '@/data-source/article/request-apis';

import { Article } from './interface';


class ContentService {
  static createArticle(data: Store) {
    return createArticle(data).then((res: StandardResponse<Article>) => {
      return Promise.resolve(res);
    });
  }

  static getArticles() {
    return getArticles().then((res: StandardResponse<Article>) => {
      return Promise.resolve(res.result);
    });
  }

  static uploadCover(file: RcFile) {
    return uploadCover(file).then((res: StandardResponse<Article>) => {
      return Promise.resolve(res);
    });
  }
}

export default ContentService;