import React from 'react'
import './PracticeProfile.css'
import doc from '../assets/doctor1.jpg'

const PracticeProfile = () => {
  return(
  <div className="doctor-card">
  <div className="info">
    <div className="avatar">
      <img src={doc} alt="doc name"/>
    </div>
    <div className="details">
        <div className="name" style={{color: 'white'}}>Dr Pelumi Bummie</div>
        <div className="meta-info">
          <span className="sp">Chief Surgeon</span>
          <span className="prac-area"> Supervise surgical departments, carry out managerial duties, educate trainees, and assist during surgeries.</span>
          <h5 className="exp">Experience:<span className='exp-yr'></span> 12 years</h5>
          <h5 className="exp">Hospital Name:<span className='exp-yr'></span> Irowa Medical Center</h5>
        </div>
    </div>
  </div>
   <div className="actions">
    <div className="ratings">
      <span className="rating-control">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
      </span>
      <span className="rating-count">Ratings</span>
    </div>
    <div className="comments">
      <span className="comment-count"><strong>340</strong> Reviews</span>
    </div>
    <div className="consultation">
      <span className="fee"><strong>200</strong> Recommendations</span>
    </div>
    <div className="appo">
      <a href="https://www.calendly.com/anetorataga" target='_blank' className="btn">Book Now</a>
    </div>
  </div>
  <div className="locations">
    <h4 style={{color: '#fff', marginLeft: '1rem'}}>Lagos</h4>
</div>
</div> 
)}



  
export default PracticeProfile