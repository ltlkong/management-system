import React, { Component } from 'react';
import { columns } from './userTableConfig';
import { Table,Button, Input } from 'antd';
import getTableData from '../../api/GetTableData';

const { Search } = Input;

export default class User extends Component {

  state = {
    usersData:[]
  }

  componentDidMount() {
    getTableData("users")
    .then(res => {
      this.setState({usersData: res})
      }
    )
  }

  render() {
    return (
      <div className="user">
        <div className="button-wrapper">
          <div></div>
          <Search placeholder="search user" style={{ width: 400 }} />
          <Button type="default" className="create-button">Create</Button>
        </div>
        <Table
          columns={columns}
          dataSource={this.state.usersData}
          className="user-table"
          bordered={true}
        />
      </div>
    );
  }
}