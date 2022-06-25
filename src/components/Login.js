import React from 'react'

import './Login.css'

const Login = () => {
  return (
    <div className='signup'>
        <div className='card-container'>
            <div className='card'>
                <h2>Returning Patient</h2>
                <form className='returning-user'>
                
                <label> Email: </label>
                <input type='text>' required></input><br></br>
                <label> Password: </label>
                <input type='text>' required></input><br></br>
                <button className='btn-submit' type='submit'>Submit</button>
                </form>
        </div>
        </div>

    </div>
  )}


export default Login