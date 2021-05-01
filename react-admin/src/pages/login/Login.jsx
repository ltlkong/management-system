import React, { Component } from 'react'
import './Login.less'
import { message, Form, Input, Button } from 'antd';
import { Redirect } from 'react-router';
import PostLoginInfo from '../../api/PostLoginInfo';

//login page
export default class Login extends Component {
  state = {
    loginState : false,
    userName : "",
    password : "",
  }

  handleInputChange = (event) => {
    const name = event.target.name

    this.setState({
      [name] : event.target.value
    })
  }

  //login vertification
  handleLogin = () => {
    const { userName, password } = this.state;

    PostLoginInfo(userName, password)
    .then(userInfo => {
      if(userInfo){ 
        this.setState({loginState : true});
      }else if(userName !== "" && password !== "") {
          message.info('Incorrect username or password');
      }
    });
  }

  render() { 
    if(this.state.loginState) {
      return <Redirect to="/"/>
    }

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
            onSubmitCapture={this.handleLogin}
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
              <Input
                name="userName"
                onChange={ this.handleInputChange}
                value={this.state.userName}
              />
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
              <Input.Password 
                name="password"
                onChange={ this.handleInputChange}
                value={this.state.password}
              />
            </Form.Item>

            <Form.Item >
              <Button
                className="login-submit-button"
                type="primary"
                htmlType="submit"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}