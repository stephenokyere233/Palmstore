
// import { useContext } from 'react'
// import { ApiContent } from './ApiContext'
import Filter from './components/Filter'
import ProductCard from './components/ProductCard'
const Men = ({query}) => {
  
  // const[query,setQuery]=useContext(ApiContent)
  // setQuery(`category/men's clothing`)
  let men=`category/men's clothing`
  return (
    
    <div className='product'>
    <ProductCard />
    <Filter/>
    </div>
  )
}

export default Men
// query={men}