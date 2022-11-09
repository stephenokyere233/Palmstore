import React from 'react'
import { createContext ,useState,useEffect} from 'react'
import Men from './Men'
import Women from './Women'
import Product from './Product'

export const ApiContent=createContext()

export const ContextProvider = ({children,query}) => {
  // console.log()
      const [wear, setWear] = useState([]);
  const [quer, setQuery] = useState('');

      // const [query,setQuery]=useState('')
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${query}`)
      .then((res) => res.json())
      .then((json) => setWear(json));
  }, []);
  return (
    <ApiContent.Provider value={[wear,setWear]} >
        {children}
        {/* <Men/>
        <Women/>
        <Product/> */}
    </ApiContent.Provider>
  )
}

// data={[query,setQuery]}
// data={[query,setQuery]}