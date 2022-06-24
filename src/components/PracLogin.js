import React from 'react'
import '../index'
import './PracLogin.css'

const PracLogin = () => {
  return (
    <div className='card-container'>
            <div className='card'>
                <h2>Returning Practitioner</h2>
                <form className='returning-user'>
                
                <label> Email: </label>
                <input type='text>' required></input>
                <label> Password: </label>
                <input type='text>' required></input>
                <button type='submit'>Submit</button>
                </form>
        </div>
        </div>

  )
}

export default PracLogin