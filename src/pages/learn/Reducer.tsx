import { useReducer } from 'react'

type Action = { type: 'add'; text: string } | { type: 'remove'; index: number }

function reducer(state: string[], action: Action) {
  switch (action.type) {
    case 'add':
      return [...state, action.text]
    case 'remove':
      return state.filter((_, i) => i !== action.index)
    default:
      return state
  }
}

export default function LearnReducer() {
  const [todos, dispatch] = useReducer(reducer, [])
  const add = () => dispatch({ type: 'add', text: `item-${Date.now()}` })
  return (
    <div>
      <h3>useReducer</h3>
      <button onClick={add}>添加</button>
      <ul>
        {todos.map((t, i) => (
          <li key={t}>
            {t} <button onClick={() => dispatch({ type: 'remove', index: i })}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

