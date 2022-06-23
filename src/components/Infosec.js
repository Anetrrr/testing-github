import React from 'react'
import {Link} from 'react-router-dom'
import './Infosec.css'
import '../index.css'

const infosec = () => {
  return (
    <div className='hero'>
         
         <div className='content'>
          <div className='title'>Healthcare Technology</div>
         <div className='headline'>Your Healthcare. <span>In your control.</span></div>
         <div className='note'>Giving you access to doctors and healthcare facilities from anywhere you are. You can set your own appointments at your convenience and have the best hands cater for your health.</div>
         
         </div>
         <div className='button'>
          <Link to='/' className='btn'>Get Started</Link>
          <Link to='/practise' className='btn'>List Practice</Link>
         </div>
         <div className='input'>
          <input type='search' placeholder='Search for a specialty, healthcare center or practitioner name'className='input'></input><button className='btn'>Search</button>
         </div>
    </div>
  )
}

export default infosec

