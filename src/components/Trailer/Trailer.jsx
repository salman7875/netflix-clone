import { ArrowBack } from '@mui/icons-material'
import './trailer.scss'
import Youtube from 'react-youtube'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Trailer = () => {
  const navigate = useNavigate()
  const path = useLocation()
  const id = path.pathname.split('/')[2]
  const [videoId, setVideoId] = useState('')

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=62383ddaefde6ba60f4b5d5c2a7ddf56`
        )
        setVideoId(res.data.results[0].key)
        console.log(res.data.results[0].key)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchTrailer()
  }, [])

  const options = {
    width: '1500px',
    height: '680px',
    playerVars: {
      autoplay: 1,
      showinfo: 0,
      rel: 0,
      controls: 1
    }
  }

  return (
    <div className='trailer'>
      <div className='wrapper'>
        {videoId && (
          <Youtube videoId={videoId} opts={options} className='video' />
        )}
        <ArrowBack className='icon' onClick={() => navigate('/')} />
      </div>
    </div>
  )
}

export default Trailer
