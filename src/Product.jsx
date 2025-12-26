import React from 'react'
import { useDispatch } from 'react-redux'
import AddToCart from './AddToCart'
import { addItem } from './redux/slice'
const Product = () => {
    const dispatch = useDispatch()
  return (
    <div>
      <div className="product-card">
  <img src="https://m.media-amazon.com/images/I/61aqaqU2JQL.jpg" alt="Product"/>

  <div className="product-info">
    <h3>Wireless Headphones</h3>
    <p className="price">₹2,499</p>
    <p className="desc">High-quality sound with noise cancellation.</p>
    <button onClick={()=>dispatch(addItem(1))}>Add to Cart</button>
  </div>
</div>
    </div>
  )
}

export default Product
