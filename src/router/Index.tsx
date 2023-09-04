import { lazy } from 'react'
import { withLoding } from '@/utils/routes'
import { Navigate } from 'react-router-dom'
import Login from '@/views/login'
import DataLayout from '@/layout/dataLayout'

const Page1 = lazy(() => import('@/views/page/Page1'))
const Page2 = lazy(() => import('@/views/page/Page2'))
import userRoutes from './modules/user'
const routes = [
  {
    path: '/',
    element: <Navigate to={'/page1'} />,
  },
  {
    path: '/',
    element: <DataLayout />,
    children:[
      {
        path: '/page1',
        element: withLoding(<Page1 />)
      },
      {
        path: '/page2',
        element: withLoding(<Page2 />)
      },
      ...userRoutes
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]

export default routes
