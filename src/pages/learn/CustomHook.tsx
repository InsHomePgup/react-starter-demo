import { useCallback, useState } from 'react'

function useToggle(initial = false) {
  const [on, setOn] = useState(initial)
  const toggle = useCallback(() => setOn(o => !o), [])
  return { on, toggle }
}

export default function LearnCustomHook() {
  const { on, toggle } = useToggle()
  return (
    <div>
      <h3>自定义 Hook</h3>
      <p>状态：{on ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>切换</button>
    </div>
  )
}

