import React from 'react'
import data from '../assets/MOCK_DATA (1).json'
import { useState } from 'react'

import './SearchFilterStyles.css'
// var createReactClass = require('create-react-class');
const SearchFilter = () => {

  return (
    
    <div className='search-container'>
      <div className='search-input'>
          <input type='text'  placeholder='Search for a specialty, healthcare center or practitioner name'className='input'/>
          
             <button className='btn-filter'> Search </button>
        </div>
            
        </div>
      
    
  
  );
}

export default SearchFilter