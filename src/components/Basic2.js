import React from 'react'
import { useState } from 'react'

const Basic2 = () => {
  const [product, setProducts] = useState([])
  const newProducts = () => {
    setProducts([...product,{
      id: product.length+1,
      name: 'Hello World'
    }])
  }

  return (
    <div>
      <button onClick={newProducts}>Add New Product</button>
      <ul>
        {product.map(product => (
          <li key={product.id}>{product.name} id: {product.id}</li>
        ))}
      </ul>
    </div>
  )
}

export default Basic2
