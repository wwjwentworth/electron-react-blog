import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

import Aside from '@/components/layout/Aside';
import Header from '@/components/layout/Header';

import { allRoutes } from '@/routes';
import { RouteConfig } from '@/routes/interface';

const { Content }  = Layout;

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <div className="content__header">
          <Header />
        </div>
        <div className="content__body">
          <div className="flex">
            <Aside />
            <Content>
              {
                allRoutes.map((route: RouteConfig) => {
                  return (
                    <Route
                      key={route.path}
                      component={route.component}
                      path={route.path}
                      exact={route.exact}
                    />
                  )
                })
              }
            </Content>
          </div>
        </div>
      </div>
    )
  }
}

export default App;