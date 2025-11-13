// src/components/MyButton.tsx
import { Button } from 'antd'
import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  createContext,
  Fragment,
  type ReactNode,
  type FC,
} from 'react'

/* 1️⃣ 泛型 Props 与默认值 */
type Size = 'small' | 'middle' | 'large'
interface MyButtonProps<T = string> {
  title: T
  size?: Size
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
  onClick?: (value: T) => void
  children?: ReactNode | ((count: number) => ReactNode) // render prop
}

/* 2️⃣ 自定义 Context */
const CountCtx = createContext(0)

/* 3️⃣ 自定义 Hook（计数器 + 防抖） */
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial)
  const inc = useCallback(() => setCount(c => c + 1), [])
  const dec = useCallback(() => setCount(c => c - 1), [])
  return { count, inc, dec } as const
}

/* 4️⃣ 高阶组件（HOC） */
function withTooltip<P extends object>(
  Component: FC<P>,
  tip: string,
): FC<P> {
  return (props) => (
    <div title={tip}>
      <Component {...props} />
    </div>
  )
}

/* 5️⃣ 类型守卫 */
function isString(val: unknown): val is string {
  return typeof val === 'string'
}

/* 6️⃣ 真正的组件 */
function MyButtonComponent<T extends string = string>(
  props: MyButtonProps<T>,
) {
  const {
    title,
    size = 'middle',
    disabled = false,
    loading = false,
    icon,
    onClick,
    children,
  } = props

  /* 7️⃣ state / ref / memo / callback */
  const { count, inc } = useCounter(0)
  const btnRef = useRef<HTMLButtonElement>(null)
  const double = useMemo(() => count * 2, [count])

  /* 8️⃣ 副作用 */
  useEffect(() => {
    console.log('[MyButton] mount / update', { count, double })
    return () => console.log('[MyButton] cleanup')
  }, [count, double])

  /* 9️⃣ 事件处理 + 类型收窄 */
  const handleClick = useCallback(() => {
    if (isString(title)) onClick?.(title as any)
    inc()
  }, [title, onClick, inc])

  /* 🔟 条件渲染 & 循环 */
  const renderTags = () => {
    if (count <= 0) return null
    return (
      <>
        {Array.from({ length: Math.min(count, 5) }, (_, i) => (
          <span key={i} style={{ marginLeft: 4, color: '#1890ff' }}>
            #{i + 1}
          </span>
        ))}
      </>
    )
  }

  /* 1️⃣1️⃣ Render Prop / Slot */
  const slotContent =
    typeof children === 'function' ? children(count) : children

  return (
    <>
      {/* Fragment 短语法 */}
      <CountCtx.Provider value={count}>
        <div style={{ marginBottom: 8 }}>
          <Button
            ref={btnRef}
            type="primary"
            size={size}
            disabled={disabled}
            loading={loading}
            icon={icon}
            onClick={handleClick}
          >
            {title} · {double}
          </Button>
          {renderTags()}
        </div>

        {/* 1️⃣2️⃣ 读取 Context */}
        <CountCtx.Consumer>
          {(c) => <small>context count = {c}</small>}
        </CountCtx.Consumer>

        {/* 1️⃣3️⃣ Slot 内容 */}
        {slotContent && <div style={{ marginTop: 4 }}>{slotContent}</div>}
      </CountCtx.Provider>

      {/* 1️⃣4️⃣ 展示 Fragment 与数组 */}
      {count % 2 === 0 && (
        <>
          <hr />
          {['A', 'B', 'C'].map((v) => (
            <Fragment key={v}>{v} </Fragment>
          ))}
        </>
      )}
    </>
  )
}

/* 1️⃣5️⃣ 默认导出 + 属性验证（运行时可选） */
export default MyButtonComponent

/* 1️⃣6️⃣ 命名导出 HOC 版本 */
export const MyButtonWithTooltip = withTooltip(MyButtonComponent, 'I am a tooltip!')
