import { lazy } from 'react'
import { withLoding } from '@/utils/routes'
import { Navigate } from 'react-router-dom'
const Home = lazy(() => import('@/views/home'))
const Login = lazy(() => import('@/views/login'))
const DataLayout = lazy(()=> import('@/layout/dataLayout'))
const Page1 = lazy(() => import('@/views/page/Page1'))
const Page2 = lazy(() => import('@/views/page/Page2'))

const routes = [
  {
    path: '/',
    element: <Navigate to={'/page1'} />,
  },
  {
    path: '/',
    element: withLoding(<DataLayout />),
    children:[
      {
        path: '/page1',
        element: withLoding(<Page1 />)
      },
      {
        path: '/page2',
        element: withLoding(<Page2 />)
      },
    ]
  }
]

export default routes
