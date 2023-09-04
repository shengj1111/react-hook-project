import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]
// 生成侧边栏数据函数
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}
// 侧边栏数据
const items: MenuItem[] = [
  getItem('Option 1', '/page1', <PieChartOutlined />),
  getItem('Option 2', '/page2', <DesktopOutlined />),
  getItem('用户', 'user', <UserOutlined />, [
    getItem('Tom', '/user/page301'),
    getItem('Bill', '/user/page302'),
  ]),
  getItem('团队', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
]

const Comp: React.FC = () => {
  const navigate = useNavigate()
  const currentRoute = useLocation()
  // 一级菜单栏展开收缩侧边栏和默认选中侧边栏
  const firstOpenKey: string = `${currentRoute.pathname.split('/')[1]}` || ''
  const [openKeys, setOpenKeys] = useState([firstOpenKey])
  // 跳转
  function menuClick(e: { key: string }) {
    navigate(e.key)
  }

  // 展开收缩事件
  function handleOpenChange(keys: string[]) {
    setOpenKeys(keys.slice(-1))
  }
  return (
    <Menu
      theme='dark'
      defaultSelectedKeys={[currentRoute.pathname]}
      mode='inline'
      items={items}
      onClick={menuClick}
      openKeys={openKeys}
      onOpenChange={handleOpenChange}
    />
  )
}
export default Comp
