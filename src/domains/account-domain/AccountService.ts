/*
 * @Author: 吴文洁
 * @Date: 2020-04-29 17:16:48
 * @LastEditors: 陈剑宇
 * @LastEditTime: 2020-05-07 16:53:20
 * @Description: 
 */
import { mockResolveService, mockRejectService, mockErrorService } from '@/data-source/account/request-apis';
import GStorage from '@/common/utils/g_storage';
import { LoginResponse } from './interface';

// import { User } from './interface';
class AccountService {
  // static getUserInfo() {
  //   getUserInfoHttp().then((userInfo: User) => {
  //     return Promise.resolve(userInfo)
  //   });
  // }
  static resolveService(params: any) {
    return mockResolveService(params).then((res: LoginResponse) => {
      console.log(res)
      GStorage.uID = res.uID;
      GStorage.token = res.token;
      return Promise.resolve(res);
    })
  }

  static rejectService(params: any) {
    return mockRejectService(params).then((res: LoginResponse) => {
      return Promise.resolve(res);
    })
  }

  static errorService(params: any) {
    return mockErrorService(params).then((res: any) => {
      return Promise.resolve(res);
    })
  }
}

export default AccountService;