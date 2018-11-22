import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

export default function SideBar(props) {
  return (
    <Sider
        trigger={null}
        collapsible
        collapsed={props.collapsed}
      >
        <div className="logo"></div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="desktop" />
            <span>Trang chủ</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="download" />
            <span>Backup Shop</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="logout" />
            <span>Đăng xuất</span>
          </Menu.Item>
        </Menu>
      </Sider>
  )
}
