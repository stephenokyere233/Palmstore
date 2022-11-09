import React from 'react'
import ProductCard from './components/ProductCard'
import Filter from './components/Filter'
// import { useContext } from 'react'
// import { ApiContent } from './ApiContext'


const Product = ({query}) => {
  let women=`category/women's clothing`
  // const[query,setQuery]=useContext(ApiContent)
  // setQuery(`category/women's clothing`)
  return (
      <div className='product'>
    <ProductCard />
      <Filter/>
    </div>
  )
}

export default Product
// query={''}
