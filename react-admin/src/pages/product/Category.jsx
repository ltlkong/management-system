import React, { Component } from 'react'
import { Table, Button, Input } from 'antd';
import '../../shareStyle/tableStyle.less'
import testData from '../../test/testData';
import { columns } from './categoryTableConfig'

const { Search } = Input;

export default class Category extends Component {

  render() {
    return (
      <div className="category">
        <div className="button-wrapper">
          <div></div>
          <Search placeholder="search category" style={{ width: 400 }} />
          <Button type="default" className="create-button">Create</Button>
        </div>
        <Table
          columns={columns}
          dataSource={testData.category}
          className="category-table"
          bordered={true}
        />
      </div>
    );
  }
}