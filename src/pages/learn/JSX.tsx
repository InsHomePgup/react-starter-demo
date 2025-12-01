import { useState } from 'react'

export default function LearnJSX() {
  const [show, setShow] = useState(true)

  const [test,setTest] = useState('hello');
  const changeTest = ()=>setTest('123')

  const [count, setCount] = useState(0)
  const items = ['React', 'TypeScript', 'Hooks']
  const toggle = () => setShow(s => !s)
  const inc = () => setCount(c => c + 1)

  /* 1️⃣ 三元条件渲染 */
  const status = count % 2 === 0 ? '偶数' : '奇数'

  /* 2️⃣ 逻辑与渲染 */
  const showTip = count > 0 && count % 3 === 0

  /* 3️⃣ 列表渲染与 key */
  const list = items.map((v, i) => <li key={i}>第{i + 1}项：{v}</li>)

  /* 4️⃣ Fragment 与空标签 */
  const frag = (
    <>
      <span>Fragment 1</span>
      <span>Fragment 2</span>
    </>
  )

  /* 5️⃣ 内联样式对象 */
  const boxStyle: React.CSSProperties = {
    padding: 8,
    border: '1px dashed #999',
    marginTop: 8,
  }

  /* 6️⃣ className 与动态类名 */
  const cls = `learn-box ${count % 2 === 0 ? 'even' : 'odd'}`

  /* 7️⃣ 事件处理与类型 */
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    console.log('点击坐标：', e.clientX, e.clientY)
    inc()
  }

  /* 8️⃣ 属性展开（spread） */
  const btnProps = { type: 'button', disabled: count > 5 } as const

  /* 9️⃣ 渲染数字范围 */
  const range = Array.from({ length: 3 }, (_, i) => <span key={i}>{i} </span>)

  return (
    <div>

        <div>{test}</div>

        <button onClick={()=>{
            changeTest()
        }}></button>

      <h3>JSX/TSX 基础</h3>
      <button onClick={toggle}>{show ? '隐藏' : '显示'}</button>
      {show && (
        <div style={{ marginTop: 12 }}>
          {/* 表达式插值 */}
          <p>{`表达式插值: ${items[0]}`}</p>

          {/* 列表渲染 */}
          <ul>{list}</ul>

          {/* Fragment */}
          <div>{frag}</div>

          {/* 内联样式 */}
          <div style={boxStyle}>内联样式对象</div>

          {/* 动态类名 */}
          <div className={cls}>动态类名：{status}</div>

          {/* 逻辑与渲染 */}
          {showTip && <small style={{ color: 'red' }}>提示：当前是 3 的倍数</small>}

          {/* 事件处理 */}
          <button onClick={handleClick} {...btnProps}>
            点我（count={count}）
          </button>

          {/* 数字范围 */}
          <div>数字范围：{range}</div>

          {/* 三元渲染 */}
          <p>{count > 3 ? '大于 3' : '不大于 3'}</p>
        </div>
      )}
    </div>
  )
}

