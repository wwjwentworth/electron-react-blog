/*
 * @Author: 吴文洁
 * @Date: 2020-05-14 16:27:16
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-14 16:36:01
 * @Description: 
 * @Copyrigh: © 2020 杭州杰竞科技有限公司 版权所有
 */

interface StandardResponse<T> {
  code: number,
  success: boolean,
  result: Result<T>,
}

interface Result<T> {
  records: T[]
}