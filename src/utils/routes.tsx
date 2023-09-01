import { Suspense } from 'react'
// 懒加载组件
export const withLoding = (comp: JSX.Element) => (
  <Suspense fallback={<div>Loding....</div>}>{comp}</Suspense>
)
