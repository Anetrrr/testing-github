import React from 'react'
import {Link} from 'react-router-dom'
import doc from '../assets/doctorsvg.svg'
import Categories from './Categories'
import './Infosec.css'


const infosec = () => {
  return (
    <div className='hero'>
        <div className='hero-container'>
          <div className='content'>
            <div className='title'>Healthcare Technology</div>
            <div className='headline'>Your Healthcare.
              <span>In your control.</span>
            </div> 
            <div className='note'>You can set your own appointments at your convenience and have the best hands cater for your health.</div>
            <div className='button'>
              <Link to='/' className='btn-start'>Get Started</Link>  
            </div>
          <Categories />
          
          </div>
          <div className='doc-img'>
            <img src={doc} alt="doc" id='hero-img'/>
          </div>
        </div>
    </div>
  )
}

export default infosec

