import React from 'react';
import { Button, message } from 'antd';
import { withRouter } from 'react-router-dom';

import './style.less';

import AccountService from '@/domains/account/AccountService';

function Login(props: any) {
  async function handleLogin() {
    AccountService.resolveService({
      params1: '1'
    })
      .then(() => {
        message.success('操作成功');
        props.history.push('/');
      })
      .catch(() => {
        console.log('失败处理1')
      })

  }

  async function handleLoginReject() {
    AccountService.rejectService({
      params1: '2'
    })
      .then(() => {
        message.success('操作成功');
        props.history.push('/');
      })
      .catch(() => {
        console.log('失败处理2')
      })
  }

  async function handleLoginError() {
    AccountService.errorService({
      params1: '3'
    })
      .then(() => {
        message.success('操作成功');
        props.history.push('/');
      })
      .catch(() => {
        console.log('失败处理3')
      })
  }

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <header>小麦助教</header>
        <div>
          <Button className="login-btn" type="primary" onClick={handleLogin}>POST success</Button>
          <Button className="login-btn" type="danger" onClick={handleLoginReject}>GET reject</Button>
          <Button className="login-btn" type="danger" onClick={handleLoginError}>GET error</Button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Login);