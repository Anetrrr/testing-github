import React from 'react'
import {Link} from 'react-router-dom'
import { TbReportMedical } from 'react-icons/tb';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { FaGlasses} from 'react-icons/fa';
import teeth from '../assets/dentist.avif'
import gp from '../assets/gp.avif'
import physio from '../assets/physio.avif'

import './Categories.css'



const Categories = () => {
  return (
    <div className='category-div'>
        <div className='category-container'>
        <Link to='/'><button className='btn-category'><img src={gp} /><br></br>General P</button></Link>
        <Link to='/'><button className='btn-category'><img src={teeth} /><br></br>Dentistry</button></Link>
       
        
        <Link to='/'><button className='btn-category'><img src={physio} /><br></br>Physiotherapy</button></Link>
        <Link to='/'><button className='btn-category'>More...</button></Link>
        </div>
        
        
    </div>
  )
}

export default Categories