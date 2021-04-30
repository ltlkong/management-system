import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import menu from './menuConfig';
import { Menu } from 'antd';
import './LeftNav.less'
import GetOpenKey from './GetOpenKeyForSubMenu'

const { SubMenu } = Menu;

class LeftNav extends Component {
  render() {
    const path= this.props.location.pathname;
    const openKey = GetOpenKey(path);

    return (
      <div className="left-nav">
        <header className="left-nav-header">
          <h2 >LTL</h2>
        </header>
           <Menu
            className="left-nav-menu"
            defaultSelectedKeys={[path]}
            defaultOpenKeys={[openKey]}
            mode="inline"
            style={{backgroundColor:"lightgray"}}
          >
            {
              menu.map(item => {
                if(!item.children){
                  return (
                   <Menu.Item key={item.key} icon={item.icon}>
                    <Link to={item.key}>
                      {item.content}
                    </Link>
                  </Menu.Item>)
                } else {
                  return (
                    <SubMenu key={item.key} icon={item.icon} title={item.content}>
                    {
                      item.children.map(itemC => {
                        return (
                        <Menu.Item key={itemC.key}>
                          <Link to={itemC.key}>
                            {itemC.content}
                          </Link>
                        </Menu.Item>)
                      })
                    }
                    </SubMenu>)
                }          
              })
            }
        </Menu>
      </div>
    );
  }
};

//higher-order component
//pass in history, location, match.
export default withRouter(LeftNav);