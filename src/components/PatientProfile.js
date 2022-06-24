import React, {useState} from 'react'
import doctor from '../assets/doctor1.jpg'
import Register from './Register'

const PatientProfile = () => {
  return (
    <div className='patient-profile'>
        <div className='container'>
        <div className="header">
                        <img src={doctor} id='profile-img' alt="" srcset="" />
                    </div> 
                    <div className='content'>
                        <h2>Ben Foster</h2>
                    </div>



        </div>

    </div>
  )
}

export default PatientProfile