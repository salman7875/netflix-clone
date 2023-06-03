import { Search } from '@mui/icons-material'
import icon from '../../assets/avatar.png'
import './navbar.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showInput, setShowInput] = useState(false)

  return (
    <nav className='navbar'>
      <div className='left'>
        <a href='#' className='logo'>
          Netflix
        </a>
        <ul>
          <li>
            <Link to='/'>My List</Link>
          </li>
          <li>
            <Link to='/'>Movies</Link>
          </li>
          <li>
            <Link to='/'>Tv Shows</Link>
          </li>
          <li>
            <Link to='/wishlist'>Wishlist</Link>
          </li>
        </ul>
      </div>
      <div className='right'>
        <Search className='icon' onClick={() => setShowInput(!showInput)} />
        {showInput && <input type='text' placeholder='search' />}
        <img src={icon} alt='icon png' className='imgIcon' />
      </div>
    </nav>
  )
}

export default Navbar
