import React from 'react';
import { Layout, Icon, Avatar } from 'antd';
const { Header } = Layout;

export default function AppHeader(props) {
  return (
    <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
            className="trigger"
            type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => props.toggle()}
        />
        <div style={{ float: 'right', marginRight: '20px' }}>
        <Avatar icon='user' />
            {' '} Tester gg
        </div>
    </Header>
  )
}
