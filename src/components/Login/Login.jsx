import './login.scss'
import img from '../../assets/background.jpg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='loginContainer'>
      <img src={img} alt='background image' />
      <div className='wrapper'>
        <h1>Netflix Clone</h1>
        <input type='email' placeholder='Get Started...' />
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default Login
