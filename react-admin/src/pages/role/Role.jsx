import React, { Component } from 'react';
import { columns } from './roleTableConfig';
import { Table } from 'antd';

const testData = [
  {
    role: "admin"
  }
]

export default class Role extends Component {

  render() {
    return (
      <div className="role">
        <Table
          columns={columns}
          dataSource={testData}
          className="role-table"
          bordered={true}
        />
      </div>
    );
  }
}