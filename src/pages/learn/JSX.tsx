import { useState, Fragment, MouseEvent } from 'react'

// 子组件用于演示 props 和 children
// Card 组件：接收 title 和 children，展示一个带有标题的卡片容器
const Card = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="border border-gray-200 rounded-lg p-4 mb-4 shadow-sm bg-white hover:shadow-md transition-shadow">
    <h3 className="text-lg font-bold mb-2 text-gray-800 border-b pb-2">{title}</h3>
    <div className="text-gray-600">{children}</div>
  </div>
)

export default function LearnJSX() {
  // 状态定义
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const isLoggedIn = true
  const userRole = 'admin' // 模拟用户角色: 'admin' | 'user' | 'guest'
  
  // 模拟数据列表
  const fruits = [
    { id: 1, name: '🍎 Apple', price: 5, inStock: true },
    { id: 2, name: '🍌 Banana', price: 2, inStock: true },
    { id: 3, name: '🍇 Grape', price: 8, inStock: false },
  ]

  // 事件处理函数
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>, msg: string) => {
    // 阻止冒泡示例：防止事件向上传播
    e.stopPropagation()
    alert(`Button clicked: ${msg}`)
  }

  // 包含 HTML 标签的字符串，用于演示 dangerouslySetInnerHTML
  const htmlContent = '<span style="color: red; font-weight: bold;">Dangerous HTML Content</span>'

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">JSX 深度实践指南</h1>
      
      {/* 1. 基础表达式渲染 */}
      <Card title="1. 基础表达式与类型渲染">
        <div className="space-y-2">
          {/* 字符串直接渲染 */}
          <p>字符串: {"Hello React"}</p>
          {/* 数字可以直接进行运算 */}
          <p>数字运算: {1 + 2 * 3}</p>
          {/* 布尔值、null 和 undefined 是合法的 JSX 子元素，但不会渲染任何内容 */}
          <p>布尔值 (不显示): {true} {false}</p>
          <p>Null/Undefined (不显示): {null} {undefined}</p>
          {/* 模板字符串的使用 */}
          <p>模板字符串: {`Current count is ${count}`}</p>
          {/* 对象不能直接作为 JSX 子元素渲染，需要转换成字符串 */}
          <p>对象渲染: {JSON.stringify({ name: 'User', age: 18 })}</p>
        </div>
      </Card>

      {/* 2. 属性绑定 */}
      <Card title="2. 属性绑定 (Attributes)">
        <div className="flex gap-4 items-center flex-wrap">
          {/* 字符串字面量属性 */}
          <div title="This is a tooltip" className="cursor-help underline decoration-dotted text-blue-500">
            Hover me (Static Title)
          </div>
          
          {/* 动态属性绑定：使用 {} 包裹表达式 */}
          <input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Dynamic Value Binding"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          
          {/* 布尔属性: disabled={true} 可以简写为 disabled */}
          {/* 下面的 disabled 属性取决于 inputValue 是否为空 */}
          <button 
            disabled={!inputValue} 
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            Submit (Enabled when input not empty)
          </button>
        </div>
      </Card>

      {/* 3. 条件渲染 */}
      <Card title="3. 条件渲染模式">
        <div className="space-y-2">
          {/* 三元运算符: condition ? true : false */}
          <p>
            用户状态: {isLoggedIn ? <span className="text-green-600 font-bold">已登录</span> : <span className="text-red-600">未登录</span>}
          </p>
          
          {/* 逻辑与 (&&): 仅当条件为 true 时渲染右侧内容 (短路运算) */}
          {/* 注意：如果左侧是 0，可能会直接渲染 0，建议使用 !!count 或 count > 0 */}
          {count > 5 && (
            <div className="p-2 bg-orange-100 border-l-4 border-orange-500 text-orange-700">
              <p className="font-bold">警告</p>
              <p>计数器数值已经大于 5 了！</p>
            </div>
          )}
          
          {/* 复杂逻辑渲染: 使用 IIFE (立即执行函数) 或在 return 前定义变量 */}
          <div className="flex items-center">
            角色权限: 
            {(() => {
              switch(userRole) {
                case 'admin': return <span className="px-2 py-1 bg-red-100 text-red-800 rounded ml-2 text-sm">管理员</span>
                case 'user': return <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded ml-2 text-sm">普通用户</span>
                default: return <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded ml-2 text-sm">游客</span>
              }
            })()}
          </div>
        </div>
      </Card>

      {/* 4. 列表渲染 */}
      <Card title="4. 列表渲染与 Key">
        <ul className="list-disc pl-5 space-y-1">
          {fruits
            .filter(fruit => fruit.inStock) // 1. 先过滤数据
            .map(fruit => (                 // 2. 再进行映射渲染
              // key 必须是唯一的，通常使用 ID
              <li key={fruit.id} className="hover:text-blue-500 transition-colors cursor-pointer">
                {fruit.name} - <span className="font-mono">${fruit.price}</span>
                {/* 列表项内部也可以使用条件渲染 */}
                {fruit.price > 4 && <span className="text-xs bg-yellow-200 text-yellow-800 ml-2 px-1 rounded">贵</span>}
              </li>
            ))
          }
        </ul>
        <p className="text-xs text-gray-400 mt-2">* 注：缺货商品 (Grape) 已被过滤不显示</p>
      </Card>

      {/* 5. 事件处理 */}
      <Card title="5. 事件处理 (Events)">
        <div className="flex gap-4">
          {/* 简单的内联事件处理 */}
          <button 
            onClick={() => setCount(c => c + 1)} 
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 active:scale-95 transition-transform"
          >
            Count + 1 (Current: {count})
          </button>

          {/* 传递自定义参数：需要使用箭头函数包裹 */}
          <button 
            onClick={(e) => handleButtonClick(e, 'Custom Message')}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 active:scale-95 transition-transform"
          >
            Click with Params
          </button>
        </div>
      </Card>

      {/* 6. HTML 转义 */}
      <Card title="6. 危险 HTML 渲染 (dangerouslySetInnerHTML)">
        <div className="p-3 border border-red-200 bg-red-50 rounded">
            {/* React 默认会自动转义字符串，防止 XSS 攻击 */}
            <p className="mb-2">
              <span className="font-semibold">默认行为 (源码显示):</span> <br/>
              {htmlContent}
            </p>
            
            <hr className="border-red-200 my-2"/>

            {/* 如果确实需要渲染 HTML (例如富文本内容)，使用 dangerouslySetInnerHTML */}
            <p>
              <span className="font-semibold">使用 dangerouslySetInnerHTML:</span> <br/>
              <span dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </p>
        </div>
      </Card>
      
      {/* 7. Fragment */}
      <Card title="7. Fragment (<>...</>)">
        <p className="mb-2 text-sm text-gray-600">
          Fragment 允许你将子元素分组，而不会在 DOM 中添加额外节点（如多余的 div）。
          <br/>
          它可以简写为 <code>&lt;&gt;...&lt;/&gt;</code>，但如果需要加 key，必须使用 <code>&lt;Fragment&gt;</code>。
        </p>
        <div className="flex border p-2 bg-gray-100 rounded">
           {/* 这里的两个 span 是直接父 div 的子元素，没有包裹层 */}
           <Fragment>
              <span className="flex-1 bg-white p-2 text-center border-r">Left Part</span>
              <span className="flex-1 bg-white p-2 text-center">Right Part</span>
           </Fragment>
        </div>
      </Card>
    </div>
  )
}
