import React, {useState} from 'react'
import './NavbarStyles.css'
import { FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function Navbar() {
    const [click, SetClick] = useState(false);
    const handleClick = () => SetClick(!click);
  return (
    <div className='header'>
        <Link to='/'><h1>MyHealthApp</h1></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/pricing'>About</Link>
            </li>
            <li>
            <Link to='/training'>List Practice</Link>
            </li>
            <li>
            <Link to='/contact' className='btn'>SignUp</Link>
            </li>
        </ul>
        <div className='hamburger' onClick= {handleClick}>
            {click ? (<FaTimes size ={20} style= {{color: '#383838'}} />): (<FaBars size ={20} style= {{color: '#383838'}} />)}
            
        </div>

    </div>
  )
}

export default Navbar