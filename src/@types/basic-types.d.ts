/*
 * @Author: 吴文洁
 * @Date: 2020-05-14 16:27:16
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-09-09 11:45:30
 * @Description: 
 */

interface StandardResponse<T> {
  code: number,
  success: boolean,
  result: Result<T>,
}

interface Result<T> {
  records: T[]
}