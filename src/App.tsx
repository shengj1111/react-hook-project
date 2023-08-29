import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '@/views/Login'

/* 
 <Route path='/login' element={<Login />} /> 
    path是路由路径 element是路由组件（标签） Component是路由组件（不是标签形式）

*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
