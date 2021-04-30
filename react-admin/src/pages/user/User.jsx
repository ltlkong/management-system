import React, { Component } from 'react';
import { columns } from './userTableConfig';
import { Table } from 'antd';

const testData = [
  {
    firstName:"tielin",
    lastName:"Li",
    account:"abc123456",
    role:"Admin",
  },
]

export default class User extends Component {
  render() {
    return (
      <div className="user">
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