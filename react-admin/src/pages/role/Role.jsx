import React, { Component } from 'react';
import { columns } from './roleTableConfig';
import { Table,Button, Input } from 'antd';
import getTableData from '../../api/GetTableData'

const { Search } = Input;

export default class Role extends Component {
  state = {
    rolesData:[]
  }

  componentDidMount() {
    getTableData("roles")
    .then(res => {
      console.log(res);
      this.setState({rolesData: res})
      }
    )
  }

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
          dataSource={this.state.rolesData}
          className="role-table"
          bordered={true}
        />
      </div>
    );
  }
}