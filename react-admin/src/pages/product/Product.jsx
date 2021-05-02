import React, { Component } from 'react'
import { Table,Button, Input } from 'antd';
import { columns } from './productTableConfig';
import '../../shareStyle/tableStyle.less';
import getTableData from '../../api/GetTableData';

const { Search } = Input;

export default class Product extends Component {
    state = {
      productsData:[]
    }

    componentDidMount() {
      getTableData("products")
      .then(res => {
        this.setState({productsData: res})
        }
      )
    }

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
          dataSource={this.state.productsData}
          className="product-table"
          bordered={true}
        />
      </div>
    );
  }
}