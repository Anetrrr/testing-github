import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './PatientorDoc.css'

const PatientorDoc = () => {
 
    const [click, SetClick] = useState(false);
    const handleClick = () => SetClick(!click)
    return (
    <div className='options'>
   <div className='patient-option'>
     <Link to='/patient/login' click> Login as Patient </Link>
     </div>
   <div className='patient-option'> 
   <Link to='/practice/login' click> Login as Doctor </Link>
    </div>

</div>
  )
}

export default PatientorDoc