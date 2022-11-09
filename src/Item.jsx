import React from 'react'
import Featured from './components/Featured'
import Reviews from './components/Reviews'
import SelectedItem from './components/SelectedItem'

const Item = ({id}) => {
  return (
    <div className='item'>
        
<SelectedItem />
        <Reviews/>
        <Featured/>
    </div>
  )
}

export default Item
