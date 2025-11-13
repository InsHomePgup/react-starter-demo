import { forwardRef, useImperativeHandle, useRef, useState } from 'react'

type Exposed = { focus: () => void }

const FancyInput = forwardRef<Exposed, { label?: string }>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }), [])
  return (
    <div>
      <label>{props.label}</label>
      <input ref={inputRef} placeholder="输入..." />
    </div>
  )
})

export default function LearnRefForward() {
  const [label, setLabel] = useState('名称')
  const api = useRef<Exposed>(null)
  return (
    <div>
      <h3>ref / forwardRef / imperativeHandle</h3>
      <button onClick={() => api.current?.focus()}>聚焦输入框</button>
      <button onClick={() => setLabel(l => l + '!')}>修改标签</button>
      <FancyInput ref={api} label={label} />
    </div>
  )
}

