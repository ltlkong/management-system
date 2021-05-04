import React, { Component } from 'react'
import { Table,Button, Input,Popconfirm, Space } from 'antd';
import '../../shareStyle/tableStyle.less';
import getTableData from '../../api/GetTableData';
import getTableDataBy from '../../api/GetTableDataBy';
import deleteTableDataBy from '../../api/DeleteTableDataById';

const { Search } = Input;

export default class Product extends Component {
    state = {
      productsData:[]
    }

    columns = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
      ellipsis:true
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis:true
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      fixed: 'right',
      width: "150px",
      render: (_,record) => (
        <Space size="large">
          <a>Modify</a>
          <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.id)}>
            <a>Delete</a>
          </Popconfirm>
        </Space>
      ),
    }]

    handleSearch = (searchInput) => {
      getTableDataBy("products",searchInput)
      .then(res => {
        this.setState({productsData: res});
      })
    } 

    handleDelete = (id) => {
      deleteTableDataBy("products", id)
      .then(res => {
        console.log(res);
        if(res){
          this.setState({productsData: res});
        }  
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
          columns={this.columns}
          dataSource={this.state.productsData}
          className="product-table"
          bordered={true}
          rowKey={(record) => record.id}
          scroll={{ x: 1200 }}
        />
      </div>
    );
  }
}