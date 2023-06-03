import {
  ArrowRight,
  InfoOutlined,
  VolumeDown,
  VolumeOff,
  VolumeUp
} from '@mui/icons-material'
import './home.scss'
import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import { movieURL, KEY, imageUrl } from '../../request'
import { Link } from 'react-router-dom'

const Home = () => {
  const [volume, setVolume] = useState(false)
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchSingleMovie = async () => {
      try {
        const res = await axios.get(`${movieURL}popular?api_key=${KEY}`)
        setMovie(res.data.results)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchSingleMovie()
  }, [])

  const random = movie[Math.floor(Math.random() * 19) + 1]

  return (
    <div className='home'>
      {random ? (
        <>
          <img src={`${imageUrl}${random.poster_path}`} alt='img 1' />
          <div className='wrapper'>
            <div className='left'>
              <h1>{random.title}</h1>
              <p>{random.overview.slice(0, 150).concat('..')}</p>
              <div>
                <Link
                  to={`/watch/${random.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <button className='playBtn'>
                    <ArrowRight className='icon' /> Play
                  </button>
                </Link>
                <Link to={`/${random.id}`} style={{ textDecoration: 'none' }}>
                  <button className='infoBtn'>
                    <InfoOutlined className='icon' /> More Info
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='right'>
            {volume ? (
              <VolumeUp className='icon' onClick={() => setVolume(false)} />
            ) : (
              <VolumeOff className='icon' onClick={() => setVolume(true)} />
            )}

            <span>{random.vote_average}+</span>
          </div>
        </>
      ) : (
        <div> Loading... </div>
      )}

      <Card type='popular' />
      <Card type='top_rated' />
    </div>
  )
}

export default Home
