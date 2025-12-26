import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddToCart from './AddToCart'
import { addItem, removeItem } from './redux/slice'
import {fetchProduct} from './redux/productSlice'
const Product = () => {
    const dispatch = useDispatch()


    useEffect(()=>{
   dispatch(fetchProduct())
    },[])
    const productSelector = useSelector((state)=>state.products.items);
    console.log(productSelector)
  return (
    <div className='grid'>

{
productSelector && productSelector.map((item)=>{
return <div className='card'>
  <img src={item.thumbnail} alt="" />
  <div className='content'>
    <div className='title'>{item.title}</div>
    <div className='brand'>{item.brand}</div>
    <div className='category'>{item.category}</div>
    <div className='price'>{item.price}</div>
    <div className='width'>{item.width}</div>
    <div className='heigth'>{item.heigth}</div>
    <div className='rating'>{item.rating}</div>
    <button className='btn'>Add To Cart</button>
<div>

</div>
  </div>
 </div>

})
}










      {/* <div className="product-card">
  <img src="https://m.media-amazon.com/images/I/61aqaqU2JQL.jpg" alt="Product"/>

  <div className="product-info">
    <h3>Wireless Headphones</h3>
    <p className="price">₹2,499</p>
    <p className="desc">High-quality sound with noise cancellation.</p>
    <button onClick={()=>dispatch(addItem(1))}>Add to Cart</button>
    <button onClick={()=>dispatch(removeItem(1))} className='remove-button'>Remove for Cart</button>
  </div>
</div> */}
    </div>
  )
}

export default Product
