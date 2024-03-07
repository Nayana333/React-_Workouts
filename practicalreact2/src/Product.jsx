import React, { useMemo } from 'react'

const Product = ({a,b}) => {
    let product=useMemo(()=>{
        return a*b
    })
  return (
    <div>
      <h1>product={product}</h1>
    </div>
  )
}

export default Product
