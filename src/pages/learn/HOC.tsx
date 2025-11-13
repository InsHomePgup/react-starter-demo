import type { FC } from 'react'

function withBorder<P>(Comp: FC<P>): FC<P> {
  const Wrapped = (props: P) => (
    <div style={{ border: '1px dashed #999', padding: 8 }}>
      <Comp {...props} />
    </div>
  )
  return Wrapped
}

function Box() {
  return <div>这是被 HOC 包裹的内容</div>
}

const BoxWithBorder = withBorder(Box)

export default function LearnHOC() {
  return (
    <div>
      <h3>高阶组件 HOC</h3>
      <BoxWithBorder />
    </div>
  )
}

