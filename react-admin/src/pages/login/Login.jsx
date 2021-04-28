import React, { Component } from 'react'
import './Login.less'
import { Form, Input, Button, Checkbox } from 'antd';

//login page
export default class Login extends Component {

  render() { 
    return (
      <div className="login">
        <header className="login-header">
          React Management System
        </header>
        <section className="login-content">
          <h2>Login</h2>
          <Form
            className="login-form"
            name="basic"
            initialValues={{
              remember: true,
            }}
         
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item  name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}