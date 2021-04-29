import React, { Component } from 'react'
import { Menu } from 'antd';
import {
  InsertRowAboveOutlined,
  BarChartOutlined,
  HomeOutlined,
  UserOutlined,
  SafetyOutlined,

} from '@ant-design/icons';
import './LeftNav.less'

const { SubMenu } = Menu;

export default class LeftNav extends Component {

  render() {
    return (

      <div className="left-nav">
        <header className="left-nav-header">
          <h2>LTL</h2>
        </header>
           <Menu
            className="left-nav-menu"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            style={{backgroundColor:"lightgray"}}
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <SubMenu key="sub1" icon={<InsertRowAboveOutlined />} title="Product">
              <Menu.Item key="2">Category</Menu.Item>
              <Menu.Item key="3">Product</Menu.Item>
            </SubMenu>
            <Menu.Item key="4" icon={<UserOutlined />}>
              User
            </Menu.Item>
            <Menu.Item key="5" icon={<SafetyOutlined />}>
              Role
            </Menu.Item>
            <SubMenu key="sub2" icon={<BarChartOutlined/>} title="Chart">
            <Menu.Item key="6">Bar Chart</Menu.Item>
            <Menu.Item key="7">Pie Chart</Menu.Item>
            <Menu.Item key="8">Line Chart</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}