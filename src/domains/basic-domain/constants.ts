/*
 * @Author: 陈剑宇
 * @Date: 2020-05-07 14:43:01
 * @LastEditTime: 2020-05-07 14:44:48
 * @LastEditors: 陈剑宇
 * @Description: 
 * @FilePath: /wheat-web-demo/src/domains/basic-domain/constants.ts
 * @Copyright © 2020 杭州杰竞科技有限公司 版权所有
 */
import { MapInterface } from '@/domains/basic-domain/interface'

const EV: string = process.env.DEPLOY_ENV || 'dev'; // 默认是 dev 环境

const HOST_MAP: MapInterface = {
  dev: 'https://dev-heimdall.xiaomai5.com/',
  dev1: 'https://dev1-heimdall.xiaomai5.com/',
  rc: 'https://rc-heimdall.xiaomai5.com/',
  gray: 'https://gray-heimdall.xiaomai5.com/',
  prod: 'https://heimdall.xiaomai5.com/'
};

const UPLOAD_MAP: MapInterface = {
  dev: 'https://dev-api-upload.xiaomai5.com/',
  dev1: 'https://dev1-api-upload.xiaomai5.com/',
  rc: 'https://rc-api-upload.xiaomai5.com/',
  gray: 'https://api-upload.xiaomai5.com/',
  prod: 'https://api-upload.xiaomai5.com/'
};

const TEMP_HOST: string = '';

// 端位前缀 c|m|b...
export const PREFIX: string = 'prefix'
// axios headers config
export const TIME_OUT: number = 20000;
export const XM_RULE: string = 'latest';
export const PLATFORM: string = 'web';
export const VERSION: string = '0.0.0';
export const USER_TYPE: string = 'B';
// host
export const HOST: string = TEMP_HOST || HOST_MAP[EV];
export const UPLOAD: string = UPLOAD_MAP[EV];