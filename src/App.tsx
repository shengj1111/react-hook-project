import { useRoutes, useNavigate, useLocation } from 'react-router-dom'
import { getToken } from '@/utils/token'
import routes from './router/Index'

function RouterEnter() {
  const navgate = useNavigate()
  const location = useLocation()
  const element = useRoutes(routes)
  if (location.pathname == '/login' && getToken('token')) {
    navgate('/page1')
  }
  if (location.pathname != '/login' && !getToken('token')) {
    navgate('/login')
  }
  return element
}

export default function App() {
  return (
    <div>
      <RouterEnter />
    </div>
  )
}
