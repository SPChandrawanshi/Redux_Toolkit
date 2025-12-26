import React from 'react'
import { useSelector } from 'react-redux'

const AddToCart = () => {
    const selecter = useSelector((state)=>state.cart.value)
    console.log(selecter)
  return (
    <div>
    <div className="cart">
    <span className="cart-icon">🛒</span>
    <span className="cart-count">{selecter}</span>
  </div>
    </div>
  )
}

export default AddToCart
