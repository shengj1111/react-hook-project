import React from 'react'
import ReactDOM from 'react-dom/client'
import BaseRoute from './router/Index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BaseRoute />
  </React.StrictMode>,
)
