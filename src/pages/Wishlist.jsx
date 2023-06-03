import './wishlist.scss'
import CardDetail from '../components/CardDetail/CardDetail'
import { useContext } from 'react'
import { wishListContext } from '../store/wishlist'

const Wishlist = () => {
  const { movie } = useContext(wishListContext)
  console.log(movie)

  return (
    <div className='wishlist'>
      <div className='wrapper'>
        {movie &&
          movie.map(data => (
            <CardDetail key={data.id} data={data} type='wishlist' />
          ))}
      </div>
    </div>
  )
}

export default Wishlist
