import React from 'react'
import {FaFacebook, FaLinkedIn, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'
import './FooterStyles.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='location'>
                <FaSearchLocation size={20} style={{color: '#fff', marginRight: '1rem'}}/>
            </div>
            <div>
                <h5> 2 Microsoft Street,</h5>
                <h4>Lagos, Nigeria</h4>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}}/> +234810-XXX-XXXX</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}}/> myhealthapp@outlook.com </h4></div>
                <div className='right'>
                    <h4>About the company</h4>
                   <h5>Schedule your healthcare needs on the go. MyHealthApp improves your lifestyle by improving your access to healthcare. </h5> 
                   <div className='social'>
                    <FaFacebook size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                    <FaTwitter size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                    {/* <FaLinkedIn size={30} style={{color: '#fff', marginRight: '1rem'}}/> */}
                   </div>
                </div>
            </div>
        </div>
    
  )
}

export default Footer