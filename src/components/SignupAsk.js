import React, {useState} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './SignupAsk.css'

const SignupAsk = () => {
    return (
        
    <div className='options'>
        <div className='patient-option'>
            <Link to='/patient/signup'> Signup as Patient </Link>
            </div>
        <div className='patient-option'> 
        <Link to='/practice/signup'> Signup as Doctor </Link>
    </div>

</div>

  )
}


export default SignupAsk