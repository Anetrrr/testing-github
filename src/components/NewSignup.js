import React, {Link} from 'react'
import './NewSignupStyles.css'

const Signup = () => {
  return (
    <div className='signup'>
        <div className='card-container'>
            <div className='card'>
                <h2>New Patient</h2>
                <form className='new-user'>
                <label> First name: </label>
                <input type='text>' required></input>
                <label> Last Name: </label>
                <input type='text>' required></input>
                <label>Sign up as: </label>
                <label> Email: </label>
                <input type='text>' required></input>
                <label> Password: </label>
                <input type='text>' required></input>
                <button type='submit'>Submit</button>
                <h5>Already have an account? </h5><button>Log In</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup