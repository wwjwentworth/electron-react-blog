/*
 * @Author: 吴文洁
 * @Date: 2020-04-29 19:16:17
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-04-30 10:45:06
 * @Description: 
 */

declare var If: React.SFC<{ condition: boolean }>;
declare var For: React.SFC<{ each: string; index?: string; of: any[] }>;
declare var Choose: React.SFC;
declare var When: React.SFC<{ condition: boolean }>;
declare var Otherwise: React.SFC;