import Login from '@/views/Login'
import Home from '@/views/home'
import {Navigate} from 'react-router-dom'

// 创建路由表规则
interface routes {
  name?: string
  path: string
  element: JSX.Element
  children?: Array<routes>,
}

// 创建路由表
const routes = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Navigate to={'/home'}/>
  }
]

export default routes
