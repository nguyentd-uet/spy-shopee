import React, { useState } from 'react';
import { Layout } from 'antd';
import SideBar from './components/SideBar';
import AppHeader from './components/AppHeader';
import Main from './components/Main';

const { Content } = Layout;

export default function App(props) {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed);
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar collapsed={collapsed} />
      <Layout>
        <AppHeader collapsed={collapsed} toggle={() => toggle()} />
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 360 }}>
          <Main />
        </Content>
      </Layout>
    </Layout>
  );
}
