type RPProps = {
  render: (pos: { x: number; y: number }) => React.ReactNode
}

function MouseTracker({ render }: RPProps) {
  const [pos, setPos] = React.useState({ x: 0, y: 0 })
  const onMove = (e: React.MouseEvent<HTMLDivElement>) =>
    setPos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
  return (
    <div onMouseMove={onMove} style={{ height: 120, background: '#f6f6f6' }}>
      {render(pos)}
    </div>
  )
}

export default function LearnRenderProps() {
  return (
    <div>
      <h3>Render Props 模式</h3>
      <MouseTracker render={(p) => <span>{p.x}, {p.y}</span>} />
    </div>
  )
}

