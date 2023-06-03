import './card.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { movieURL, KEY, imageUrl } from '../../request'

const Card = ({ type }) => {
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(`${movieURL}${type}?api_key=${KEY}`)
        setMovieData(res.data.results)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchMovies()
  }, [])

  return (
    <div className='card'>
      <h2>{type} Movies</h2>
      <div className='box'>
        {movieData.map(movie => (
          <Link to={`/${movie.id}`} key={movie.id}>
            <img src={`${imageUrl}${movie.poster_path}`} alt='poster film' />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Card
