import React from 'react'
import {Link} from 'react-router-dom'
import '../index'
import './NewPractioner.css'

const NewPractioner = () => {
  return (
    <div className='card-container-new-prac'>
            <div className='card-new-prac'>
                <h2 style={{color: 'orange'}}>New Practitioner</h2>
                <form className='new-user'>
                <label style={{color: 'orange'}}> First name: </label>
                <input type='text>' required style={{width: '350px', height:'40px'}}></input><br></br>
                <label style={{color: 'orange'}}> Last Name: </label>
                <input type='text>' required style={{width: '350px', height:'40px'}}></input><br></br>
                
                <label  style={{color: 'orange'}}> Name of Practice: </label>
                <input type='text>' required style={{width: '350px', height:'40px'}}></input><br></br>
                <label style={{color: 'orange'}}> Category: </label>
                <select>
                <option value='General Practice'>General Practice</option>
                <option value='Physiotherapy'>Physiotherapy</option>
                <option value='Ophthamology'>Ophthamology</option>
                <option value='Neurology'>Neurology</option>
                <option value='Cardiology'>Cardiology</option>
                <option value='OB-GYN'>OB-GYN</option>
                <option value='Others'>Others</option>
                </select> <br></br>
                <label style={{color: 'orange'}}> Location: </label> 
                <input type='text>' required style={{width: '350px', height:'40px'}}></input><br></br>
                <label style={{color: 'orange'}}> Email: </label>
                <input type='text>' required style={{width: '350px', height:'40px'}}></input><br></br>
                <label style={{color: 'orange'}}> Password: </label>
                <input type='text' required style={{width: '350px', height:'40px'}}></input><br></br>
                <button className='sub'type='submit'>Submit</button>
                <h5>Already have an account? </h5>
                <Link to='/practice/login' className='lgn'>Log In</Link>
              
                </form>
            </div>
        </div>
  )
}

export default NewPractioner