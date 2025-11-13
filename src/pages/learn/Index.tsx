import { Link } from 'react-router-dom'

export default function LearnIndex() {
  const topics = [
    { path: '/learn/jsx', label: 'JSX/TSX 基础' },
    { path: '/learn/props', label: 'Props 与 children' },
    { path: '/learn/state-effect', label: 'useState / useEffect' },
    { path: '/learn/memo-callback', label: 'useMemo / useCallback' },
    { path: '/learn/ref-forward', label: 'ref / forwardRef / imperativeHandle' },
    { path: '/learn/context', label: 'Context 与 useContext' },
    { path: '/learn/reducer', label: 'useReducer' },
    { path: '/learn/custom-hook', label: '自定义 Hook' },
    { path: '/learn/hoc', label: '高阶组件 HOC' },
    { path: '/learn/render-props', label: 'Render Props 模式' },
  ]
  return (
    <div>
      <h2>React 学习目录</h2>
      <ul style={{ lineHeight: 2 }}>
        {topics.map(t => (
          <li key={t.path}>
            <Link to={t.path}>{t.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

