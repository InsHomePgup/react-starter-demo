import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import About from '../pages/About'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import User from '../pages/User'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'user', element: <User /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default router
