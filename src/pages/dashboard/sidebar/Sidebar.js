import React from 'react'
 import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
 } from '@ant-design/icons';
import { Divider, Menu } from 'antd';
import { Link } from 'react-router-dom';
  const items = [
  {
    key: '1',
    icon: <MailOutlined />,
    label:<Link to="/private/dashboard/home">Home</Link>,
    
   },
  {
    key: '2',
    icon: <CalendarOutlined />,
    label: <Link to="/private/dashboard/product">Probucts</Link>
  },
  {
    key: 'sub1',
    label: 'Community',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '3',
        label:<Link to="/private/dashboard/client">Client</Link>,
      },
      {
        key: '4',
        label: <Link to="/private/dashboard/contect">Conect</Link>,
      },
      {
        key: 'sub1-2',
        label: 'Manage Product',
        children: [
          {
            key: '5',
            label: <Link to="/private/dashboard/rawprodect">Row Product</Link>,
          },
          {
            key: '6',
            label: <Link to="/private/dashboard/finalprodect">Final Product</Link>,
          },
        ],
      },
    ],
  },
   
  {
    key: 'link',
    icon: <LinkOutlined />,
    label: <Link to="/private/dashboard/crud">Create Read Update Deleted </Link>,

  },
];
 
const Sidebar = () => {

     
   
  return (
    <>
     
        <Divider type="vertical" />
           <Menu
            // style={{ width: 200,height:0 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline" // Use 'inline' for vertical submenu expansion
            items={items}
          />
        
      
     </>
  )
}

export default Sidebar
