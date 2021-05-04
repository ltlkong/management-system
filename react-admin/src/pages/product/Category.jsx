import React, { Component } from 'react'
import { Table, Button, Input, Space, Popconfirm } from 'antd';
import '../../shareStyle/tableStyle.less'
import getTableData from '../../api/GetTableData';
import createTableData from '../../api/CreateTableElement';
import getTableDataBy from '../../api/GetTableDataBy';
import deleteTableDataBy from '../../api/DeleteTableDataById';


const { Search } = Input;

export default class Category extends Component {
  state = {
    categoriesData:[]
  }

  columns = [
  {
    title: 'Category',
    dataIndex: 'name',
    key: 'name',
    ellipsis:true
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
    getTableDataBy("categories",searchInput)
    .then(res => {
      this.setState({categoriesData: res});
    })
  } 

  handleDelete = (id) => {
    deleteTableDataBy("categories",id)
    .then(res => {
      if(res){
        this.setState({categoriesData: res});
      }  
    })
  }

  componentDidMount() {
    getTableData("categories")
    .then(res => {
      this.setState({categoriesData: res})
      }
    )
  }

  render() {
    return (
      <div className="category">
        <div className="button-wrapper">
          <div></div>
          <Search
            placeholder="search category"
            style={{ width: 400 }}
            onSearch={(value) => this.handleSearch(value)}
          />
          <Button type="default" className="create-button">Create</Button>
        </div>
        <Table
          columns={this.columns}
          dataSource={this.state.categoriesData}
          className="category-table"
          bordered={true}
          rowKey={(record) => record.id}
          scroll={{ x: 1000 }}
        />
      </div>
    );
  }
}