import React from 'react'
import { useSelector } from 'react-redux'

export default function Page1() {
  const { num } = useSelector((state: StoreType) => ({ num: state.num }))
  return <div>Page1{num}</div>
}
