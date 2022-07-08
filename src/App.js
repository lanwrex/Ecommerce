import React,{useState} from 'react'
import Nav from './components/Nav'
import Product from './components/Product'

function App() {
  const [addToCart, setAddToCart] =useState(0)
  const [count,setCount]=useState(0)
  console.log(addToCart)

  return (
    <div className='h-screen items-center justify-center md:flex'>
      <Nav addToCart={addToCart}  />
      <Product
      addToCart={addToCart}
      setAddToCart={setAddToCart}
      setCount={setCount}
        // handleCart={handleCart}
        // increaseCounter={increaseCounter}
        // decreaseCounter={decreaseCounter}
        count={count}
      />
    </div>
  )
}

export default App
