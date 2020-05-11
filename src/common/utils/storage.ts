/*
 * @Author: 陈剑宇
 * @Date: 2020-05-01 22:19:24
 * @LastEditTime: 2020-05-04 14:12:48
 * @LastEditors: 陈剑宇
 * @Description: storage
 * @FilePath: /wheat-web-demo/src/common/js/storage.ts
 * @Copyright © 2020 杭州杰竞科技有限公司 版权所有
 */
import { XMStorageImplements } from '@/domains/basic-domain/interface';

const LS: Storage = window.localStorage;

class XMStorage implements XMStorageImplements {
  support: boolean = true

  constructor() {
    this.support = this.supportLocalStorage();
  }

  supportLocalStorage() {
    if (LS) {
      try {
        LS.setItem('test_supprot_storage', 'test_supprot_storage_val');
        LS.removeItem('test_supprot_storage');
        return true;
      } catch (e) {
        return false;
      }
    } else {
      return false;
    }
  }

  get(key: string) {
    let value = null;
    if (this.support) {
      value = LS.getItem(key);
    }

    return value;
  }

  set(key: string, value: any) {
    if (this.support) {
      LS.setItem(key, value);
    }
  }

  setObj(key: string, obj: any) {
    if (this.support) {
      LS.setItem(key, JSON.stringify(obj));
    }
  }

  getObj(key: string) {
    let value = null;
    if (this.support) {
      const LSItem = LS.getItem(key);
      try {
        if (LSItem) {
          value = JSON.parse(LSItem);
        }
      } catch (error) {
        value = LSItem;
      }
    }
    return value;
  }

  remove(key: string) {
    if (this.support) {
      LS.removeItem(key);
    }
  }

  clear() {
    if (this.support) {
      LS.clear();
    }
  }

}

export default new XMStorage();