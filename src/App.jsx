import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Hero from './components/Hero/Hero'
import Trailer from './components/Trailer/Trailer'
import Root from './Root'
import Wishlist from './pages/Wishlist'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: ':id', element: <Hero /> },
      { path: 'watch/:id', element: <Trailer /> },
      { path: 'wishlist', element: <Wishlist /> }
    ]
  },
  { path: '/login', element: <Login /> }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
