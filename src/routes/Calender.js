import React from 'react'
import { BrowserRouter as Route } from 'react-router-dom'

const Calender = () => {
  return (
    <div>
        <Route path='/patient/user/book' component={() => {
            window.location.href = 'https://google.com';
            return null;
        }}/>
    </div>
  )
}

export default Calender