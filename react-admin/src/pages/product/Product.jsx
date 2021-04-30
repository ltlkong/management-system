import React, { Component } from 'react'
import { Table } from 'antd';
import { columns } from './productTableConfig';
import '../../shareStyle/tableStyle.less';

const testData = [
    {
      id:1,
      name:"macbook air",
      price:"1200",
      inStock:3,
      description:"apple m1 macbook air"
  }
]

export default class Product extends Component {

  render() {
    return (
      <div className="product">
        <Table
          columns={columns}
          dataSource={testData}
          className="product-table"
          bordered={true}
        />
      </div>
    );
  }
}