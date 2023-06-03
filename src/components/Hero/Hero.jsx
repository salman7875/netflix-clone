import './hero.scss'
import {
  Add,
  ArrowRight,
  ThumbUpOutlined,
  VolumeDown,
  VolumeUp
} from '@mui/icons-material'
import CardDetail from '../CardDetail/CardDetail'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { wishListContext } from '../../store/wishlist'
import axios from 'axios'
import { movieURL, imageUrl, KEY } from '../../request'

const Hero = () => {
  const [movie, setMovie] = useState({})
  const [suggested, setSuggested] = useState([])
  const navigate = useNavigate()
  const id = useLocation().pathname.split('/')[1]
  const { addMovie } = useContext(wishListContext)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=62383ddaefde6ba60f4b5d5c2a7ddf56`
        )
        console.log(res.data)
        setMovie(res.data)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchMovie()
  }, [id])

  useEffect(() => {
    const fetchSuggestedMovies = async () => {
      try {
        const res = await axios.get(`${movieURL}popular?api_key=${KEY}`)
        setSuggested(res.data.results)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchSuggestedMovies()
  }, [])

  const addMovieHandler = data => {
    addMovie(data)
  }

  return (
    <div className='hero'>
      {movie ? (
        <div className='wrapper'>
          <img src={`${imageUrl}${movie.poster_path}`} alt='img 2' />
          <h1>{movie.title}</h1>
          <span className='close' onClick={() => navigate('/')}>
            X
          </span>
          <div className='actions'>
            <div className='box'>
              <button className='playBtn'>
                <ArrowRight className='icon' />
                Play
              </button>
              <Add className='icon' onClick={() => addMovieHandler(movie)} />
              <ThumbUpOutlined className='icon' />
            </div>
            <div>
              <VolumeUp className='icon' />
              {/* <VolumeDown className='icon' /> */}
            </div>
          </div>

          <div className='time'>
            <span className='match'>
              {Math.floor(movie.vote_average)}% Match
            </span>
            <span className='year'>2023</span>
            <span className='age'>10+</span>
            <span className='min'>{(movie.runtime / 60).toFixed(2)}m</span>
            <span className='quality'>HD</span>
          </div>

          <div className='container '>
            <div className='desc'>
              <p>{movie.overview?.slice(0, 200).concat('...')}</p>
            </div>

            <div className='right'>
              <p className='genres'>
                Generes:{' '}
                {movie.genres?.map((gen, i) => (
                  <span key={i}>{gen.name}, </span>
                ))}
              </p>
              <p className='available'>
                Available in :{' '}
                {movie.spoken_languages?.map(lang => (
                  <span key={lang}>{lang.name}, </span>
                ))}
              </p>
            </div>
          </div>

          <div className='more'>
            <div className='heading'>More Like This</div>
            {suggested.slice(0, 6).map(movie => (
              <CardDetail key={movie.id} data={movie} />
            ))}
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
}

export default Hero
