import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import NewSignup from '../components/NewSignup'


const Signup = () => {
  return (
    <div>
       
        <HeroImage heading='Join as a patient or practitioner?' text='Choose your category'/>
        <NewSignup />
      
    </div>
  )
}

export default Signup