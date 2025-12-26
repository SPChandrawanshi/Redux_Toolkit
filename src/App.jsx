
import { useDispatch } from 'react-redux'
import './App.css'
import Header from './Header'
import Product from './Product'
import { clearAllItem } from './redux/slice'
function App() {
const dispatch = useDispatch();
  return (
    <>
    <Header/>
    <h1>React Redux Toolkit</h1>
    <button style={{width:"150px"}} onClick={()=>dispatch(clearAllItem())} className='btn'>Clear Cart</button>
    <Product/>
    </>
  )
}

export default App
