import React from 'react'
import '../index'
import './NewPractioner.css'

const NewPractioner = () => {
  return (
    <div className='card-container-new-prac'>
            <div className='card-new-prac'>
                <h2>New Practitioner</h2>
                <form className='new-user'>
                <label> First name: </label>
                <input type='text>' required></input><br></br>
                <label> Last Name: </label>
                <input type='text>' required></input><br></br>
                
                <label> Name of Practice: </label>
                <input type='text>' required></input><br></br>
                <label> Category: </label>
                <select>
                <option value='General Practice'>General Practice</option>
                <option value='Physiotherapy'>Physiotherpy</option>
                <option value='Ophthamology'>Ophthamology</option>
                <option value='Neurology'>Neurology</option>
                <option value='Cardiology'>Cardiology</option>
                <option value='OB-GYN'>OB-GYN</option>
                <option value='Others'>Others</option>
                </select> <br></br>
                <label> Location: </label>
                <input type='text>' required></input><br></br>
                <label> Email: </label>
                <input type='text>' required></input><br></br>
                <label> Password: </label>
                <input type='text' required></input><br></br>
                <button className='sub'type='submit'>Submit</button>
                <h5>Already have an account? </h5><button>Log In</button>
                </form>
            </div>
        </div>
  )
}

export default NewPractioner