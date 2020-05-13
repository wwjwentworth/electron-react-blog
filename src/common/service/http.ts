/*
 * @Author: 陈剑宇
 * @Date: 2020-04-30 10:32:24
 * @LastEditTime: 2020-05-13 16:00:38
 * @LastEditors: 吴文洁
 * @Description: 接口请求
 * @FilePath: /wheat-web-demo/src/common/service/http.ts
 * @Copyright © 2020 杭州杰竞科技有限公司 版权所有
 */
import _ from 'underscore';

import axiosService from '@/common/service/axios';
import { XMServiceImplements } from '@/domains/basic/interface';

class XMService implements XMServiceImplements {

  XMAxios: any = axiosService.getAxiosInstance();

  removeNull(param: any) {
    if (!param) {
      return;
    }
    for (let attr in param) {
      if (_.isNull(param[attr]) || _.isUndefined(param[attr])) {
        delete param[attr];
        continue;
      }
      if (typeof (param[attr]) === "object") {
        this.removeNull(param[attr]);
      }
    }
  }

  get(url: string, params?: { [propName: string]: any }, option?: any) {
    const optionConfig = Object.assign({ params }, option);
    return this.XMAxios.get(url, optionConfig);
  }

  post(url: string, data?: { [propName: string]: any }, option?: any) {
    this.removeNull(data);
    const optionConfig = Object.assign({
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      } 
    }, option)
    return this.XMAxios.post(url, data, optionConfig);
  }

  Content(url: string, data?: { [propName: string]: any }, option?: any){
    return this.post(`/content/${url}`, data, option);
  }
}

export default new XMService();