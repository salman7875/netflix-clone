import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Login from './components/Login/Login'
// import Home from './components/Home/Home'
// import Hero from './components/Hero/Hero'
// import Trailer from './components/Trailer/Trailer'
import Root from './Root'
// import Wishlist from './pages/Wishlist'
import { Suspense, lazy } from 'react'

const Login = lazy(() => import('./components/Login/Login'))
const Home = lazy(() => import('./components/Home/Home'))
const Hero = lazy(() => import('./components/Hero/Hero'))
const Trailer = lazy(() => import('./components/Trailer/Trailer'))
const Wishlist = lazy(() => import('./pages/Wishlist'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        )
      },
      {
        path: ':id',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Hero />
          </Suspense>
        )
      },
      {
        path: 'watch/:id',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Trailer />
          </Suspense>
        )
      },
      {
        path: 'wishlist',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Wishlist />
          </Suspense>
        )
      }
    ]
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    )
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
