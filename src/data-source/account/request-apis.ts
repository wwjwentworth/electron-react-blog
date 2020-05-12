/*
 * @Author: 吴文洁
 * @Date: 2020-04-29 17:07:50
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-12 17:06:52
 * @Description: 
 */
import http from '@/common/service/http';
import { translatorMockData } from './translators';

export const getUserInfoHttp = () => {

}

export const mockResolveService = (params: any) => {
  const url = 'https://www.fastmock.site/mock/d88575ec8943439f74e01d88b855c057/test/mock1'
  return http.post(url, params).then((res: any) => {
    return Promise.resolve(translatorMockData(res))
  });
}

export const mockRejectService = (params: any) => {
  const url = 'https://www.fastmock.site/mock/d88575ec8943439f74e01d88b855c057/test/mock2'
  return http.get(url, params).then((res: any) => {
    return Promise.resolve(translatorMockData(res))
  });
}

export const mockErrorService = (params: any) => {
  const url = 'public/user/queryPag';
  return http.Content(url, params).then((res: any) => {
    return Promise.resolve(translatorMockData(res))
  });
}