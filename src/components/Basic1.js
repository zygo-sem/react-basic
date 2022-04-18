import React from 'react'
import { useState } from 'react'

const Basic1 = () => {
  const [product, setProducts] = useState({name: '', price: ''})

  return (
    <div>
      <form>
        <input type='text' value={product.name}
        onChange={event => setProducts({...product, name: event.target.value})} />

        <input type='text' value={product.price}
        onChange={event => setProducts({...product, price: event.target.value})} />
      </form>
      <h3>Product name is {product.name}</h3>
      <h3>Product price is {product.price}</h3>

    </div>
  )
}

export default Basic1
