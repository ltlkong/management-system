import { Space } from 'antd';

export const columns = [
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
    dataIndex: 'inStock',
    key: 'inStock',
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
