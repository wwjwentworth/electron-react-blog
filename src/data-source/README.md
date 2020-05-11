<!--
 * @Author: 吴文洁
 * @Date: 2020-04-29 16:57:38
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-04-29 17:02:39
 * @Description: 
 -->
### 与后台的数据交互层（承担防腐重任）

**本目录的引用别名是 @/data-source**

request-apis.js和translators注意都是 复数。
translators.js 为前后端字段（or 数据结构）转换的方法集合。（防腐层）

### 注意：接口请求的所有返回数据结构，必须经过 translator 转后成与前端 domain 中的结构匹配后才能用于视图层。
