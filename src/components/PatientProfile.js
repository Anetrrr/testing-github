import React, {useState} from 'react'
import {Link, BrowserRouter as Routes} from 'react-router-dom'
import image from '../assets/doctor1.jpg'
import DoctorList from './DoctorList'
import './PatientProfileStyles.css'

const PatientProfile = () => {
  console.log('hello, i got to patient profile')
  return (
    <div className='full-page'>
    <div className="card">
      <h4>Welcome, Bradley. How are you feeling today?</h4>
    <div Name="img">

      <img src={image} alt="pic"/>
    </div>
    <div className="infos">
      <div className="name">
        <h2>Bradley Steve</h2>
        <h4>@bradsteve</h4>
      </div>
      <p className="text">
        What's your location at the moment?
      </p>
      <select className="stats">
        <option className='option'>Lagos</option>
        <option className='option'>Abuja</option>
        <option className='option'>Enugu</option>
          
      </select> 
      <div className="links">
        
      <a href="https://www.calendly.com/anetorataga" NameName="follow">
        <button className='follow'>Calender</button></a>
    
        <button className="view">My profile</button>
      </div>
    </div>
  </div>
      <div className='pat' id='patient'></div>
  </div>

   
  )
}

export default PatientProfile