import { useState } from 'react'

export default function LearnJSX() {
  const [show, setShow] = useState(true)
  const items = ['React', 'TypeScript', 'Hooks']
  const toggle = () => setShow(s => !s)
  return (
    <div>
      <h3>JSX/TSX 基础</h3>
      <button onClick={toggle}>{show ? '隐藏' : '显示'}</button>
      {show && (
        <div style={{ marginTop: 12 }}>
          <p>{`表达式插值: ${items[0]}`}</p>
          <ul>
            {items.map(v => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

