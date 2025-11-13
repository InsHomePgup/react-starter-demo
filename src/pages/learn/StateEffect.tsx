import { useEffect, useState } from 'react'

export default function LearnStateEffect() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setCount(c => c + 1), 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <div>
      <h3>useState / useEffect</h3>
      <p>计数：{count}</p>
      <button onClick={() => setCount(0)}>重置</button>
    </div>
  )
}

