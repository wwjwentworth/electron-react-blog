/*
 * @Author: 吴文洁
 * @Date: 2020-04-29 10:14:24
 * @LastEditors: 陈剑宇
 * @LastEditTime: 2020-05-07 16:49:32
 * @Description: 用户领域下的interface
 */
export interface User {
  name?: string;
  avatar?: string;
}

export interface LoginRequest {

}

export interface LoginResponse {
  uID: string,
  token: string,
}