import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Home() {
  const { state:{id} } = useLocation()
  return <div>Home{id}</div>
}
