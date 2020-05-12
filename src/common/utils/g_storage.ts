/*
 * @Author: 陈剑宇
 * @Date: 2020-05-03 11:44:22
 * @LastEditTime: 2020-05-06 17:21:44
 * @LastEditors: 陈剑宇
 * @Description: 网关数据存储
 * @FilePath: /wheat-web-demo/src/common/js/g_storage.ts
 * @Copyright © 2020 杭州杰竞科技有限公司 版权所有
 */

import XMStorage from '@/common/utils/storage';
import { PREFIX } from '@/domains/basic/constants';

class GStorage {
  get token() {
    return XMStorage.get(`${PREFIX}_token`);
  }
  set token(token: string | null | undefined) {
    XMStorage.set(`${PREFIX}_token`, token);
  }

  get uID() {
    return XMStorage.get(`${PREFIX}_uID`);
  }
  set uID(uID: string | null | undefined) {
    XMStorage.set(`${PREFIX}_uID`, uID);
  }

  get instID() {
    return XMStorage.get(`${PREFIX}_instID`);
  }
  set instID(instID: string | null | undefined) {
    XMStorage.set(`${PREFIX}_instID`, instID);
  }

  get aID() {
    return XMStorage.get(`${PREFIX}_aID`);
  }
  set aID(aID: string | null | undefined) {
    XMStorage.set(`${PREFIX}_aID`, aID);
  }

  get cID() {
    return XMStorage.get(`${PREFIX}_cID`);
  }
  set cID(cID: string | null | undefined) {
    XMStorage.set(`${PREFIX}_cID`, cID);
  }
}

export default new GStorage();