import React, { Component } from 'react'
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav/LeftNav';
import HeaderC from '../../components/header/HeaderC';
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import Category from '../product/Category';
import Product from '../product/Product';
import User from '../user/User';
import Role from '../role/Role';
import BarChart from '../charts/BarChart';
import PieChart from '../charts/BarChart';
import LineChart from '../charts/BarChart';
import './Admin.css'
const { Header, Footer, Sider, Content } = Layout;

//admin page
export default class Admin extends Component {

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };


  render() {
    //login status is false
    if(false){
      return <Redirect to="/login"/>
    }

    return (
       <>
        <Layout style={{height:"100%"}}>
          <Sider
            collapsible collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <LeftNav/>
          </Sider>
          <Layout>
            <Header style={{color:"grey",backgroundColor:"#e3e3e3"}}><HeaderC/></Header>
            <Content>
              <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/category" component={Category}/>
                <Route path="/product" component={Product}/>
                <Route path="/user" component={User}/>
                <Route path="/role" component={Role}/>
                <Route path="/charts/bar" component={BarChart}/>
                <Route path="/charts/pie" component={PieChart}/>
                <Route path="/charts/line" component={LineChart}/>
                <Redirect to="/home"/>
              </Switch>
            </Content>
            <Footer style={{textAlign:"center",color:"grey",backgroundColor:"#e3e3e3",height:"46px",padding:"0px",lineHeight:"46px"}}>
              Created By LTL
            </Footer>
          </Layout>
        </Layout>
      </>
    );
  }
}