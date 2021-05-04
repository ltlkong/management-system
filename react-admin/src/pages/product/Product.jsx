import React, { Component } from 'react'
import { Table,Button, Input } from 'antd';
import { columns } from './productTableConfig';
import '../../shareStyle/tableStyle.less';
import getTableData from '../../api/GetTableData';
import getTableDataBy from '../../api/GetTableDataBy';

const { Search } = Input;

export default class Product extends Component {
    state = {
      productsData:[]
    }

    handleSearch = (searchInput) => {
      getTableDataBy("products",searchInput)
      .then(res => {
        this.setState({productsData: res});
      })
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
          <Search
            placeholder="search product"
            style={{ width: 400 }} 
            onSearch={(value) => this.handleSearch(value)}
          />
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