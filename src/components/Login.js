import React from 'react'

import './Login.css'

const Login = () => {
  return (
    <div className='signup'>
        <div className='card-container-pat'>
            <div className='card-pat'>
                <h2>Returning Patient</h2>
                <form className='returning-user'>
                
                <label className='email'> Email: </label>
                <input type='text>' required></input><br></br>
                <label> Password: </label>
                <input type='text>' required></input><br></br>
                <button className='sub' type='submit'>Submit</button>
                </form>
        </div>
        </div>

    </div>
  )}


export default Login