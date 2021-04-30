import {
  InsertRowAboveOutlined,
  BarChartOutlined,
  HomeOutlined,
  UserOutlined,
  SafetyOutlined,

} from '@ant-design/icons';
//Dynamic render menu
const menu = [
  {
    key: "/home",
    content: "Home",
    icon: <HomeOutlined />
  },
  {
    key: "/subProduct",
    content: "Product",
    icon: <InsertRowAboveOutlined />,
    children: [
      {
        key: "/category",
        content: "Category",
        icon: "" 
      },
      {
        key: "/product",
        content: "Product",
        icon: ""
      }
    ]
  },
  {
    key: "/user",
    content: "User",
    icon: <UserOutlined />
  },
  {
    key: "/role",
    content: "Role",
    icon: <SafetyOutlined />
  },
  {
    key: "/subChart",
    content: "Charts",
    icon: <BarChartOutlined />,
    children: [
      {
        key: "/charts/bar",
        content: "Bar Chart",
      },
      {
        key: "/charts/pie",
        content: "Pie Chart",
      },
      {
        key: "/charts/line",
        content: "Line Chart",
      }
    ]
  }
];

export default menu;