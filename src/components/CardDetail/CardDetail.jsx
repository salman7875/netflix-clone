import {
  Add,
  KeyboardArrowDown,
  Minimize,
  PlayCircleFilledOutlined,
  ThumbUpOffAlt,
  VolumeUp
} from '@mui/icons-material'
import './cardDetail.scss'
import { useContext } from 'react'
import { wishListContext } from '../../store/wishlist'
import { imageUrl } from '../../request'
import { Link } from 'react-router-dom'

const CardDetail = ({ data, type }) => {
  const { removeMovie } = useContext(wishListContext)

  const removeMovieHandler = id => {
    removeMovie(id)
  }

  return (
    <div className='cardDetail'>
      <div className='top'>
        <img src={`${imageUrl}${data?.poster_path}`} alt='poster' />
        <div className='innerTop'>
          <span>{data?.title}</span>
          <VolumeUp className='iconTop' />
        </div>
      </div>
      <div className='bottom'>
        <div className='top'>
          <PlayCircleFilledOutlined className='icon' />
          {type ? (
            <Minimize
              className='icon'
              onClick={() => removeMovieHandler(data?.id)}
            />
          ) : (
            <Add className='icon' />
          )}
          <ThumbUpOffAlt className='icon' />
          <Link to={`/${data?.id}`}>
            <KeyboardArrowDown className='icon' />
          </Link>
        </div>
        <p>
          <span className='percent'>{data?.vote} Match</span>
          <span className='rating'>13+</span>
          <span className='time'>1h 9m</span>
          <span className='quality'>HD</span>
        </p>
        <div className='bottoms'>
          <span>Action</span> | <span>Crime</span> | <span>Thriller</span>
        </div>
      </div>
    </div>
  )
}

export default CardDetail
