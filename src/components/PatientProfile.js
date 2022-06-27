import React, {useState} from 'react'
import {Link, BrowserRouter as Routes} from 'react-router-dom'
import image from '../assets/doctor1.jpg'
import DoctorList from './DoctorList'
import './PatientProfileStyles.css'

const PatientProfile = () => {
  return (
    <div className='full-page'>
    <div class="card">
      <h4>Welcome, Bradley. How are you feeling today?</h4>
    <div class="img">

      <img src={image} alt="pic"/>
    </div>
    <div class="infos">
      <div class="name">
        <h2>Bradley Steve</h2>
        <h4>@bradsteve</h4>
      </div>
      <p class="text">
        What's your location at the moment?
      </p>
      <select class="stats">
        <option className='option'>Lagos</option>
        <option className='option'>Abuja</option>
        <option className='option'>Enugu</option>
          
      </select> 
      <div class="links">
        <Routes>
      <Link to = 'https://google.com/'><button class="follow" href='www.google.com'></button></Link>
      </Routes>
        <button class="view">My profile</button>
      </div>
    </div>
  </div>
      <div className='pat' id='patient'></div>
  </div>

   
  )
}

export default PatientProfile