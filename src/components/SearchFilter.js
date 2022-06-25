import React from 'react'
import './SearchFilterStyles.css'

const SearchFilter = () => {
  return (
    
      <div className='input'>
          <input type='search' placeholder='Search for a specialty, healthcare center or practitioner name'className='input'></input><button className='btn-filter'>Search</button>
         </div>
    
  )
}

export default SearchFilter