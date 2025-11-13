import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import User from '../pages/User'
import NotFound from '../pages/NotFound'
import LearnIndex from '../pages/learn/Index'
import LearnJSX from '../pages/learn/JSX'
import LearnProps from '../pages/learn/Props'
import LearnStateEffect from '../pages/learn/StateEffect'
import LearnMemoCallback from '../pages/learn/MemoCallback'
import LearnRefForward from '../pages/learn/RefForward'
import LearnContext from '../pages/learn/Context'
import LearnReducer from '../pages/learn/Reducer'
import LearnCustomHook from '../pages/learn/CustomHook'
import LearnHOC from '../pages/learn/HOC'
import LearnRenderProps from '../pages/learn/RenderProps'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'user', element: <User /> },
      { path: 'learn', element: <LearnIndex /> },
      { path: 'learn/jsx', element: <LearnJSX /> },
      { path: 'learn/props', element: <LearnProps /> },
      { path: 'learn/state-effect', element: <LearnStateEffect /> },
      { path: 'learn/memo-callback', element: <LearnMemoCallback /> },
      { path: 'learn/ref-forward', element: <LearnRefForward /> },
      { path: 'learn/context', element: <LearnContext /> },
      { path: 'learn/reducer', element: <LearnReducer /> },
      { path: 'learn/custom-hook', element: <LearnCustomHook /> },
      { path: 'learn/hoc', element: <LearnHOC /> },
      { path: 'learn/render-props', element: <LearnRenderProps /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default router
