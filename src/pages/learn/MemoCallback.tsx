import { useCallback, useMemo, useState } from 'react'

function sum(n: number) {
  let s = 0
  for (let i = 0; i < n; i++) s += i
  return s
}

export default function LearnMemoCallback() {
  const [n, setN] = useState(10000)
  const total = useMemo(() => sum(n), [n])
  const inc = useCallback(() => setN(v => v + 1000), [])
  return (
    <div>
      <h3>useMemo / useCallback</h3>
      <p>n: {n}</p>
      <p>sum(0..n-1): {total}</p>
      <button onClick={inc}>+1000</button>
    </div>
  )
}

