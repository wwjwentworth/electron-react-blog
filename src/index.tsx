/*
 * @Author: 吴文洁
 * @Date: 2020-04-27 20:35:34
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-11 17:44:07
 * @Description:
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';

import RootRoutes from '@/routes/RootRoutes';

import 'antd/dist/antd.less';
import '@/common/less/index.less';

const history = createBrowserHistory();
const stores = {}

const render = () => {
  ReactDOM.render((
    <Provider {...stores}>
      <HashRouter {...history}>
        <RootRoutes/>
      </HashRouter>
    </Provider>
  ), document.getElementById('root'));
}

render();