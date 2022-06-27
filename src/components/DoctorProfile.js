import React from 'react'
import './DoctorProfileStyles.css'

const DoctorProfile = () => {
  return (
    <div class="card">
    <div class="img">
      <img src={image} alt="pic"/>
    </div>
    <div class="infos">
      <div class="name">
        <h2>Bradley Steve</h2>
        <h4>@bradsteve</h4>
      </div>
      <p class="text">
        I'm a Front End Developer, follow me to be the first 
        who see my new work.
      </p>
      <ul class="stats">
        <li>
          <h3>15K</h3>
          <h4>Views</h4>
        </li>
        <li>
          <h3>82</h3>
          <h4>Projects</h4>
        </li>
        <li>
          <h3>1.3M</h3>
          <h4>Followers</h4>
        </li>
      </ul>
      <div class="links">
        <button class="follow">Follow</button>
        <button class="view">View profile</button>
      </div>
    </div>
  </div>

   
  )
}
  


export default DoctorProfile