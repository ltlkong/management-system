import { Space } from 'antd';

export const columns = [
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
