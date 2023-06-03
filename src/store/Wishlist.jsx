import { createContext, useEffect, useState } from 'react'

export const wishListContext = createContext()

export const WishlistProvider = props => {
  const [movie, setMovie] = useState([])

  const addMovie = data => {
    const existingMovie = movie.find(m => m.id === data.id)
    if (existingMovie) return
    setMovie(prev => [...prev, data])
  }

  const removeMovie = id => {
    setMovie(movie.filter(data => data.id !== id))
  }

  return (
    <wishListContext.Provider value={{ movie, addMovie, removeMovie }}>
      {props.children}
    </wishListContext.Provider>
  )
}
