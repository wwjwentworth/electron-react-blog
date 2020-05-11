/*
 * @Author: 吴文洁
 * @Date: 2020-04-29 17:08:00
 * @LastEditors: 陈剑宇
 * @LastEditTime: 2020-05-07 16:52:14
 * @Description: 
 */

import { User } from '@/domains/account-domain/interface';

export const translatorUserInfo = (data: User) => {

}

export const translatorMockData = (res: any) => {
  return {
    uID: res.result.uid,
    token: res.result.token
  }
}