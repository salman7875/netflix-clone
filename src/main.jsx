import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { WishlistProvider } from './store/wishlist.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <WishlistProvider>
    <App />
  </WishlistProvider>
)
