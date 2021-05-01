import React, { Component } from 'react';
import { columns } from './roleTableConfig';
import { Table,Button, Input } from 'antd';

const { Search } = Input;

const testData = [
  {
    role: "admin"
  }
]

export default class Role extends Component {

  render() {
    return (
      <div className="role">
        <div className="button-wrapper">
          <div></div>
          <Search placeholder="search role" style={{ width: 400 }} />
          <Button type="default" className="create-button">Create</Button>
        </div>
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