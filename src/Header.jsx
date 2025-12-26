import React from 'react'
import AddToCart from './AddToCart'

const Header = () => {
  return (
    <div>
      <header className="header">
  <div className="logo">ShopKart</div>

  <nav className="nav">
    <a href="#">Home</a>
    <a href="#">Products</a>
    
  </nav>

 
<AddToCart/>
</header>
    </div>
  )
}

export default Header
