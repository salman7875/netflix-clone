import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

const Root = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Root
