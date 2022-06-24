import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'
import doctorVid from '../assets/doctor-vid.mp4'
const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={doctorVid} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>Access Your Doctors Anytime.</h1>
            <p>At the touch of a button, you can access the best healthcare, no matter where you are. </p>
        </div>
        <div>
           
            <Link to='/practise' className=' btn bgblack'>Telehealth</Link>
            <Link to='/practise' className=' btn bgblack'>General Practise</Link>
            <Link to='/practise' className=' btn bgblack'>Dentistry</Link>
            <Link to='/practise' className=' btn bgblack'>Eye Doctor</Link>
            <input type='search' placeholder='Locate doctors and hospitals...'></input>
        </div>
    </div>
  )
}

export default Video