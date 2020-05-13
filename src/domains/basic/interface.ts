/*
 * @Author: 吴文洁
 * @Date: 2020-04-28 18:10:07
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-13 16:09:22
 * @Description: 系统interface
 */
import { AxiosInstance } from 'axios';

export interface AxiosResponse {

}

export interface AxiosResponseError {

}

// axios.ts
export interface HeadersOptionInterface {
  token?: string | null | undefined,
}

export interface AxiosServiceImplements {
  getAxiosInstance: () => AxiosInstance,
  initAxiosInterceptors: () => void,
}

export interface XMStorageImplements {
  get: (key: string) => any,
  set: (key: string, value: any) => void,
  getObj: (key: string) => any,
  setObj: (key: string, obj: any) => void,
  remove: (key: string) => void,
  clear: () => void,
}

// http.ts
export interface XMServiceProperty {
  (url: string, params: { [propName: string]: any }, option?: any): any
}

export interface XMServiceImplements {
  post: XMServiceProperty,
  get: XMServiceProperty,
}