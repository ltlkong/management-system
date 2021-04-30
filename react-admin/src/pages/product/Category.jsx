import React, { Component } from 'react'
import { Table } from 'antd';
import './CategoryAndProduct.less'
import testData from '../../test/testData';
import { columns } from './categoryTableConfig'


export default class Category extends Component {

  render() {
    return (
      <div className="category">
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