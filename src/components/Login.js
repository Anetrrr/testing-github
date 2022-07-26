import React from 'react'
import {Link} from 'react-router-dom'

import './Login.css'

const Login = () => {
  return (
    <div className='signup'>
        <div className='card-container-pat'>
            <div className='card-pat'>
                <h2 style={{marginLeft: '50px'}}>Returning Patient</h2>
                <form className='returning-user'>
                
                <label className='email' style={{color: 'orange'}}> Email: </label>
                <input type='text' required></input><br></br>
                <label style={{color: 'orange'}}> Password: </label>
                <input type='text>' required></input><br></br>
                <button className='sub' type='submit'>Submit</button>
                <h5 style={{color: '#fff'}}>New here? </h5><Link to='/patient/signup' style={{color: 'orange'}}>Sign up</Link>
                </form>
                
        </div>
        </div>

    </div>
  )}


export default Login