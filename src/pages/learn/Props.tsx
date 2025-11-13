import type { PropsWithChildren, ReactNode } from 'react'

type GreetingProps = PropsWithChildren<{
  name?: string
  render?: (name: string) => ReactNode
}>

function Greeting({ name = 'World', children, render }: GreetingProps) {
  return (
    <div>
      <strong>Hello, {name}</strong>
      {children && <div style={{ marginTop: 8 }}>{children}</div>}
      {render && <div style={{ marginTop: 8 }}>{render(name)}</div>}
    </div>
  )
}

export default function LearnProps() {
  return (
    <div>
      <h3>Props 与 children</h3>
      <Greeting name="TSX">这是作为 children 的段落</Greeting>
      <Greeting render={(n) => <em>{n.toUpperCase()}</em>} />
    </div>
  )
}

