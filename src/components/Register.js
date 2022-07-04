import React, {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import doctor from '../assets/doctor1.jpg'
import './RegisterStyles.css'
import RPatientLogin from '../routes/RPatientLogin'

// import '../index.js'

const Register = () => {
    const emailRef = useRef();
    const fNameRef = useRef();
    const sNameRef = useRef();
    const pwdRef = useRef();
    const confirmPwdRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");



  
    
  const handleSubmit=(e)=>{
      e.preventDefault();
      setLoading(true);

//       const submit = axios.post('/patient',
//         {
//             "firstname": fNameRef.current.value,
//             "lastname": sNameRef.current.value,
//             "email": emailRef.current.value,
//             "password": pwdRef.current.value,
//             "confirm_password": confirmPwdRef.current.value,
//         }
//       ).then(d => {
//              setLoading(false)
//       }).catch(err => {
//           console.log(err)
//           setLoading(false)
//       })
   
  }

  return (
    <section className="login">
    <div className="container">
      <h3 className="title" style={{color: 'orange', marginTop: '3rem', marginLeft: '3rem'}}>New Patient Sign up</h3>
      
      <div className="social-login">
        
        
        
      </div>
      
      
      <form>
        <div className="form-group" style={{position: 'relative'}} >
          <label for="firstname"></label>
          <input type="text" id="fullname" placeholder="First Name" style={{width: '350px' }}/>          
        </div>
        
        <div className="form-group">
          <label for="surname"></label>
          <input type="text" id="surname" placeholder="Surname" style={{width: '350px' }}/>          
        </div>
        
        <div className="form-group">
          <label for="login as"></label>
          <input type="text" id="Login as" placeholder="Login as" style={{width: '350px' }}/>          
        </div> 
        
        <div className="form-group">
          <label for="dob"></label>
          <input type="date" id="Age" placeholder='date of birth' style={{width: '350px' }}/>          
        </div>
        
        <div className="form-group">
          <label for="Email"></label>
          <input type="Email" id="Email" placeholder="Email Address" style={{width: '350px' }}/>          
        </div>
        
        <div className="form-group">
          <label for="password"></label>
          <input type="password" id="password" placeholder="Password" style={{width: '350px' }}/>          
        </div>
        
        <div className="form-group">
          <label for="password"></label>
          <input type="password" id="Confirm Password" placeholder="Confirm Password" style={{width: '350px' }}/>          
        </div>
        
        <button type="submit" style={{width: '350px', height:'40px', background: 'transparent', margin: '30px auto', border:'1px solid orange  ', color: 'orange', fontSize: '14px'}}>Sign up</button>
      </form>
      
      <p className="additional-act" style={{marginTop: '150px', marginBottom: '50px', marginLeft: '200px' }}>Already have an account? <span><Link to='/patient/login'> Sign in </Link></span></p>
      
      
    </div>
  </section>
    )
}

export default Register