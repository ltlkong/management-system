import React, { Component } from 'react'
import { Table,Button, Input } from 'antd';
import { columns } from './productTableConfig';
import '../../shareStyle/tableStyle.less';

const { Search } = Input;

const testData = [
    {
      id:1,
      name:"macbook air",
      price:"1200",
      inStock:3,
      description:"apple m1 macbook air",
  },
      {
      id:1,
      name:"macbook air",
      price:"1200",
      inStock:3,
      description:"apple m1 macbook air"
  },    {
      id:1,
      name:"macbook air",
      price:"1200",
      inStock:3,
      description:"apple m1 macbook air"
  },
      {
      id:1,
      name:"macbook air",
      price:"1200",
      inStock:3,
      description:"apple m1 macbook air"
  },
      {
      id:1,
      name:"macbook air",
      price:"1200",
      inStock:3,
      description:"apple m1 macbook air"
  },
      {
      id:1,
      name:"macbook air",
      price:"1200",
      inStock:3,
      description:"apple m1 macbook air"
  },
  {
      id:1,
      name:"macbook air",
      price:"1200",
      inStock:3,
      description:"apple m1 macbook air"
  },
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
        <div className="button-wrapper">
          <div></div>
          <Search placeholder="search product" style={{ width: 400 }} />
          <Button type="default" className="create-button">Create</Button>
        </div>
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