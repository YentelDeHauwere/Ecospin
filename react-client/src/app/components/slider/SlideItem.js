import { default as React } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillStar, AiOutlineInfoCircle, AiOutlineScan  } from "react-icons/ai";
import { GiBatteryPack } from "react-icons/gi";
import { MdLocationOn  } from "react-icons/md";
import { TiLocationArrowOutline  } from "react-icons/ti";

import './Slider.scss'

const SlideItem = ({id, title, adress, battery, batteryDuration}) => {

  return (
	  
	<div className="slide" id={id}>
		<img className="slide-picture" src={require('../../_static/images/longboard.png')} alt="ninestep" />

		<h4 className="slide-title">{title} <NavLink to='/detail'><AiOutlineInfoCircle className="info" /></NavLink> </h4>
			
		<p className="slide-review"> 
			<AiFillStar className="star checked" />
			<AiFillStar className="star checked" />
			<AiFillStar className="star checked" />
			<AiFillStar className="star checked" />
			<AiFillStar className="star" />
			(23)
		</p>

		<div className="slide-info">
			<div className="slide-info-battery">
				<p><GiBatteryPack className="battery" />{battery}%</p>
				<p>{batteryDuration} uur</p>
			</div>
			<hr className="slide-info-divider"/>
			<div className="slide-info-location">
				<p><MdLocationOn className="location" /> {adress}</p>
				<p>1,9 km</p>
			</div>
		</div>

		<div className="slide-buttons">
			<button className="button-small outline "><TiLocationArrowOutline className="navigate" />Navigate</button>
			<button className="button-small fill"><AiOutlineScan className="scan" />Scan</button>
		</div>
	</div>
  );

};

export default SlideItem;