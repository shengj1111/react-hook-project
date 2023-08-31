import Login from '@/views/login'
import Home from '@/views/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '@/App'

const BaseRoute = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)

export default BaseRoute
