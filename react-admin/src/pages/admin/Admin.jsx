import React, { Component } from 'react'
import { Menu } from 'antd';
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav/LeftNav';
import HeaderC from '../../components/header/HeaderC';

const { Header, Footer, Sider, Content } = Layout;

//admin page
export default class Admin extends Component {
 handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
       <>
        <Layout style={{height:"100%"}}>
          <Sider>
            <LeftNav/>
          </Sider>
          <Layout>
            <Header style={{color:"grey",backgroundColor:"#e3e3e3"}}><HeaderC/></Header>
            <Content>Content</Content>
            <Footer style={{textAlign:"center",color:"grey",backgroundColor:"#e3e3e3"}}>Created By LTL</Footer>
          </Layout>
        </Layout>
      </>
    );
  }
}