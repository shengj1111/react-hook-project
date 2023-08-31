import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  function goHome() {
    navigate('/home', {
      replace: false,
      state: {
        id: 0,
      },
    })
  }
  return (
    <div>
      <button onClick={goHome}>跳转到home</button>
      <Outlet />
    </div>
  )
}
