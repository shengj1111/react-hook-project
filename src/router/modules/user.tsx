import { lazy } from 'react'

const Page3 = lazy(() => import('@/views/user/page3'))
const Page4 = lazy(() => import('@/views/user/page4'))

export default [
  {
    path: '/user/page301',
    element: <Page3 />,
  },
  {
    path: '/user/page302',
    element: <Page4 />,
  },
]
