import { default as React } from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonLarge, ButtonLargeOutline } from '../buttons';

import Avatar from 'react-avatar';
import { AiFillStar } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";

import './Slider.scss';

const Detail = ({children}) => {

  return (
	  <div >
		<NavLink to='/search'><FiArrowLeft className="detail-arrow"/></NavLink>
		<div className="detail-card">
			<img className="slide-picture detail" src={require('../../_static/images/longboard.png')} alt="ninestep" />

			<h4 className="slide-title detail">Ninestep</h4>
				
			<p className="slide-review detail"> 
				<AiFillStar className="star checked" />
				<AiFillStar className="star checked" />
				<AiFillStar className="star checked" />
				<AiFillStar className="star checked" />
				<AiFillStar className="star" />
				23 reviews
			</p>

			<ButtonLarge content="Scan"/>

			<div className="detail-section">

				<h5 className="detail-title">Specifications</h5>
				<p className="detail-subtitle">Usage</p>
				<div className="specification-container">
					<p className="specification-text">Handlebar height</p>
					<p className="specification-text bold">0-100cm</p>
				</div>
				<div className="specification-container">
					<p className="specification-text">Max weight</p>
					<p className="specification-text bold">100kg</p>
				</div>

				<p className="detail-subtitle">Battery</p>
				<div className="specification-container">
					<p className="specification-text">Max actionradius</p>
					<p className="specification-text bold">19km</p>
				</div>
				<div className="specification-container">
					<p className="specification-text">Charge duration</p>
					<p className="specification-text bold">5h</p>
				</div>
				<div className="specification-container">
					<p className="specification-text">Battery percentage</p>
					<p className="specification-text bold">93%</p>
				</div>

			</div>

			<div className="detail-section">
				<h5 className="detail-title">Location</h5>
				<div className="mapbox"></div>
				<p>Leeuwensstraat 3, Leuven Belgium</p>
				<ButtonLargeOutline content="Navigate"/>
			</div>

			<div className="detail-section">
				<h5 className="detail-title">Reviews</h5>
				<div className="review-slider">

					<div className="review">
						<div className="review-user">
							<Avatar className="review-user-image" facebookId="100008343750919" size="46" />
							<div className="review-user-label"> 
								<p className="review-user-name">Mark West</p>
								<div>
									<AiFillStar className="star checked" />
									<AiFillStar className="star checked" />
									<AiFillStar className="star checked" />
									<AiFillStar className="star checked" />
									<AiFillStar className="star" />
								</div>
							</div>
						</div>
						<p className="review-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
					</div>

					<div className="review">
						<div className="review-user">
							<Avatar className="review-user-image" facebookId="100008343750993" size="46" />
							<div className="review-user-label"> 
								<p className="review-user-name">Dory North</p>
								<div>
									<AiFillStar className="star checked" />
									<AiFillStar className="star checked" />
									<AiFillStar className="star checked" />
									<AiFillStar className="star" />
									<AiFillStar className="star" />
								</div>
							</div>
						</div>
						<p className="review-text">Lorem ipsum dolor sit amet, consetetur...</p>
					</div>

				</div>
				<p className="review-show-more">Show all reviews (9)</p>
			</div>
			<ButtonLargeOutline content="Contact Seller" />
		</div>
	</div>
  );

};

export default Detail;