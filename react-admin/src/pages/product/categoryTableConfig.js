import { Space } from 'antd';

export const columns = [
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
    width: "15%",
    render: () => (
      <Space size="large">
        <a>Modify</a>
        <a>Delete</a>
      </Space>
    ),
  }
]
