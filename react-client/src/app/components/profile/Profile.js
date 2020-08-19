import { default as React } from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonEdit } from '../buttons';
import Avatar from 'react-avatar';
import { AiOutlinePicture, AiOutlineNodeIndex } from "react-icons/ai";

import './Profile.scss'

const Profile = () => {

  return (
	  <div className="profile-header">
		  <div className="profile-header-button">
		  	<ButtonEdit content="Edit profile"/>
		  </div>
		  <div className="profile-header-bio">
		  	<div>
				  <Avatar className="profile-header-bio-img" facebookId="100008343750945" size="115" style={{ justifyContent: "center", display: "flex" }}/>
			</div>
			<p className="profile-header-bio-name">Lisa Aanzee</p>
			<p className="profile-header-bio-job">Web Developer</p>
		  </div>
		  <div className="profile-header-stats">
			<div className="profile-header-stats-stat">
				<b>615</b> 
				<p>followers</p>
			</div>
			<div className="profile-header-stats-stat">
				<b>34</b> 
				<p>posts</p>
			</div>
			<div className="profile-header-stats-stat">
				<b>4</b> 
				<p>routes</p>
			</div>
		  </div>
		  <div className="profile-header-nav">
			<NavLink to='/profile/posts' className="profile-header-nav-item" activeClassName="profile-header-nav-item-active">
				<AiOutlinePicture/>
			</NavLink>
			<NavLink to='/profile/routes' className="profile-header-nav-item" activeClassName="profile-header-nav-item-active">
				<AiOutlineNodeIndex/>
			</NavLink>
		  </div>
	  </div>

  );

};

export default Profile;