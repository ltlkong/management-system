import React, { Component } from 'react';
import { columns } from './userTableConfig';
import { Table,Button, Input } from 'antd';

const { Search } = Input;

const testData = [
  {
    account:"abc123456",
    firstName:"tielin",
    lastName:"Li", 
    role:"Admin",
  },
]

export default class User extends Component {
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
          dataSource={testData}
          className="user-table"
          bordered={true}
        />
      </div>
    );
  }
}