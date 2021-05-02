import React, { Component } from 'react'
import { Table, Button, Input } from 'antd';
import '../../shareStyle/tableStyle.less'
import { columns } from './categoryTableConfig';
import getTableData from '../../api/GetTableData';
import createTableData from '../../api/CreateTableElement';

const { Search } = Input;

export default class Category extends Component {
  state = {
    categoriesData:[]
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
          <Search placeholder="search category" style={{ width: 400 }} />
          <Button type="default" className="create-button">Create</Button>
        </div>
        <Table
          columns={columns}
          dataSource={this.state.categoriesData}
          className="category-table"
          bordered={true}
        />
      </div>
    );
  }
}