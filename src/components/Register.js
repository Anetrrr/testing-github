import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import doctor from '../assets/doctor1.jpg'
import './RegisterStyles.css'
// import '../index.js'

const Register = () => {
  const [email,setemail]=useState('');
  const[Fusername,setFusername]=useState('');
  const[Susername,setSusername]=useState('');
  const[pwd1,setpwd1]=useState('');
  const[pwd2,setpwd2]=useState('');
  
  const handelsubmit=(e)=>{
      e.preventDefault();
  }

  return (
        <div className='main-Register'>
          <div className="left-side">
                    {/* <div className="header">
                        <img src={doctor} id='logo-img' alt="" srcset="" />
                    </div>
                    <div className="body">
                        <img src={doctor} id='reg-img' alt="" srcset="" />
                    </div> */}
                 <p>New Here? Please Register </p>
            </div>
            <div className="right-side">
               <div className="top-right">
                       <p>Already have an Account?
                      
                          <Link id='Links-signin' to='/'>Sign In</Link>   
                          </p> 
            </div>
            <div className="body-right">
                        <div className="container">
                        <h1>Create Account!</h1>
                        <form onSubmit={handelsubmit}>
                            <div className="input-group">
                            <h5> First Name</h5>
                              <input type="text" name="Fname" value={Fusername}
                              onChange={(e)=>{setFusername(e.target.value)}} id="fname" />
                            </div>
                            <div className="input-group">
                                <h5> Last Name</h5>
                                <input type="text" name="lname" value={Susername}
                                onChange={(e)=>{setSusername(e.target.value)}} id="lname" />
                            </div>
                            <div className="input-group">
                                <h5> Email</h5>
                                <input type="Email" name="email" value={email} 
                                onChange={(e)=>{setemail(e.target.value)}} id="email1" />
                            </div>
                            <div className="input-group">
                                <h5> Password</h5>
                                <input type="password" value={pwd1} 
                                onChange={(e)=>{setpwd1(e.target.value)}}  name="pwd" id="pwd1" />
                            </div>
                            <div className="input-group">
                                <h5> Confirm Password</h5>
                                <input type="password" value={pwd2}
                                onChange={(e)=>{setpwd2(e.target.value)}} name="pwd" id="pwd2" />
                            </div>
                                <Link to='/patient/user'></Link><button type="submit" id='sbtn' value="Submit"></button>
                            </form>
                        </div>

            </div>
           
            </div>
        </div>
    )
}

export default Register