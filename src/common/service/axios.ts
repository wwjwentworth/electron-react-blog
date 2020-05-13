/*
 * @Author: 陈剑宇
 * @Date: 2020-04-29 18:35:09
 * @LastEditTime: 2020-05-13 15:34:38
 * @LastEditors: 吴文洁
 * @Description: axios
 * @FilePath: /wheat-web-demo/src/common/js/axios.ts
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';

import GStorage from '@/common/utils/g_storage';
import { HOST, TIME_OUT} from '@/domains/basic/constants';
import { HeadersOptionInterface, AxiosServiceImplements } from '@/domains/basic/interface';

declare var Promise: any;

class axiosService implements AxiosServiceImplements {
  axiosInstance: AxiosInstance = axios.create({
    baseURL: HOST,
    timeout: TIME_OUT,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  });

  constructor() {
    this.initAxiosInterceptors();
  }

  getAxiosInstance() {
    return this.axiosInstance;
  }

  initAxiosInterceptors() {
    // 请求拦截
    this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      let headersOption: HeadersOptionInterface = {
        'token': GStorage.token || '',
      }
      config.headers = Object.assign({}, config.headers, headersOption);
      return config;
    }, (error: any) => {
      return Promise.reject(error);
    });

    // 响应拦截
    this.axiosInstance.interceptors.response.use((response: AxiosResponse<any>) => {
      const { data = {} } = response;
      if (data.token) {
        GStorage.token = data.token;
      }
      if (data.code >= 200 && data.code < 400) {
        return Promise.resolve(data);
      } else {
        message.error(data.message);
        return Promise.reject(data);
      }
    }, (error: any) => {
      this.axiosServiceError(error.response);
      return Promise.reject(error);
    });
  }

  axiosServiceError(res: any = {}) {
    const { status } = res;
    let errorMessage = '';
    if (status === 401 || status === 403) {
      errorMessage = '403 权限错误 请退出重登';
    } else if (status === 404) {
      errorMessage = '404 网络错误 请检查你的本地网络是否连接';
    } else if (status === 500) {
      errorMessage = 'Oops! 500错误 ';
    } else if (status === 400) {
      errorMessage = 'Oops! 400错误 操作异常';
    } else {
      errorMessage = '服务器出错了';
    }
    message.error(errorMessage);
  }
}

export default new axiosService();