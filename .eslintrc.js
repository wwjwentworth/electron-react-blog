/*
 * @Author: 吴文洁
 * @Date: 2020-04-30 10:39:36
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-07 12:39:41
 * @Description: 
 */
module.exports = {
  "parser": '@typescript-eslint/parser',
  "plugins": [
    "jsx-control-statements",
    "@typescript-eslint"
  ],
  "rules": {
    "react/jsx-no-undef": [2, { "allowGlobals": true }]
  },
  "extends": ["react-app", "plugin:jsx-control-statements/recommended"],
}
