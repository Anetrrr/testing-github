import React from 'react'
import {Link} from 'react-router-dom'
import '../index'
import './PracLogin.css'

const PracLogin = () => {
  return (
    <div className='card-container-prac'>
            <div className='card-prac'>
                <h2>Returning Practitioner</h2>
                <form className='returning-user'>
                
                <label> Email: </label>
                <input type='text>' required></input>
                <label> Password: </label>
                <input type='text>' required></input>
                <button className='sub' type='submit'>Submit</button>

                <h5>New here? </h5><Link to='/practice/signup'>Sign up</Link>
                </form>
        </div>
        </div>

  )
}

export default PracLogin