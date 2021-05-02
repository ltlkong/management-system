import React, { Component } from 'react'
import './Login.less'
import { message, Form, Input, Button } from 'antd';
import postLoginInfo from '../../api/PostLoginInfo';
import Cookie from 'js-cookie';


//login page
export default class Login extends Component {
  state = {
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

    if(userName !== "" && password !== "")
    {
      postLoginInfo(userName, password)
      .then(loginInfo => {
        if(loginInfo.status === 1){
          message.info(loginInfo.msg);
        } else {
          Cookie.set("user",JSON.stringify(loginInfo.user), { expires: 7 });
          this.props.history.replace('/');
        }
      });
    }
    
  }

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