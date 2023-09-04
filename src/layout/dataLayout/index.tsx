import React, { useState } from 'react'
import { Breadcrumb, Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import LauoutMenu from '@/components/LayoutMenu'

const { Header, Content, Footer, Sider } = Layout

// 面包屑数据
const breadcrumbItem = [{ title: 'user' }]

const DataLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 侧边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <div className='logo' />
        <LauoutMenu />
      </Sider>
      <Layout>
        {/* 头部 */}
        <Header style={{ padding: '16px', background: '#ccc' }}>
          {/* 面包屑 */}
          <Breadcrumb items={breadcrumbItem} />
        </Header>
        <Content style={{ margin: '16px 0 0 0' }} className='content'>
          <Outlet />
        </Content>
        {/* 底部 */}
        <Footer style={{ textAlign: 'center', height: '48px' }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default DataLayout
