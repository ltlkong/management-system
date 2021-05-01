import { Space } from 'antd';

export const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
    ellipsis:true
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
    ellipsis:true
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    ellipsis:true
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    fixed: 'right',
    width: "15%",
    render: () => (
      <Space size="large">
        <a>Modify</a>
        <a>Delete</a>
      </Space>
    ),
  }
]
