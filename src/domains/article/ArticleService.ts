/*
 * @Author: 吴文洁
 * @Date: 2020-04-29 17:17:20
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-12 17:19:12
 * @Description: 
 */
import { Store } from 'antd/lib/form/interface';
import { createArticle } from '@/data-source/article/request-apis';

import { ArticleResponse } from './interface';


class ContentService {
  static createArticle(data: Store) {
    return createArticle(data).then((res: ArticleResponse) => {
      return Promise.resolve(res);
    });
  }
}

export default ContentService;