import { createContext, useContext, useState } from 'react'

type Theme = 'light' | 'dark'
const ThemeCtx = createContext<Theme>('light')

function ThemeViewer() {
  const theme = useContext(ThemeCtx)
  const bg = theme === 'light' ? '#fff' : '#333'
  const color = theme === 'light' ? '#333' : '#fff'
  return <div style={{ background: bg, color, padding: 12 }}>当前主题：{theme}</div>
}

export default function LearnContext() {
  const [theme, setTheme] = useState<Theme>('light')
  const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'))
  return (
    <div>
      <h3>Context 与 useContext</h3>
      <button onClick={toggle}>切换主题</button>
      <ThemeCtx.Provider value={theme}>
        <ThemeViewer />
      </ThemeCtx.Provider>
    </div>
  )
}

