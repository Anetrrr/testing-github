import React from 'react'
import './DoctorProfileStyles.css'

const DoctorProfile = () => {
  return (
    <div class="doctor-card">
		<div class="info">
			<div class="avatar">
				<img src="//via.placeholder.com/200" alt="doc name"/>
			</div>
      <div class="details">
          <div class="name">Some Popular Name</div>
          <div class="meta-info">
            <span class="sp">Actor-Director</span>
            <span class="prac-area"> Lorem ipsum dolor sit amet.</span>
            <span class="exp-yr">10 years exp.</span>
          </div>
      </div>
		</div>
		<div class="actions">
			<div class="ratings">
				<span class="rating-control">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-half-o"></i>
					<i class="fa fa-star-o"></i>
					<i class="fa fa-star-o"></i>
				</span>
				<span class="rating-count">000 Ratings</span>
			</div>
			<div class="comments">
				<span class="comment-count"><strong>340</strong> Comments</span>
			</div>
			<div class="consultation">
				<span class="fee"><strong>34K</strong>Followers</span>
			</div>
			<div class="appo">
				<a href="#" class="btn">Book Now</a>
			</div>
		</div>
		<div class="locations">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </div>
	</div>
   
  )
}
  


export default DoctorProfile