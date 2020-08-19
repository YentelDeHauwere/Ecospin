import { default as React } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineSearch, AiOutlineBell, AiOutlineMenu } from "react-icons/ai";

import './Navbar.scss'

const Navbar = () => {

  return (
	  <div className="navb">
		<NavLink to='/home'  className="navb-link" activeClassName="navb-link-icon-active">
			<AiOutlineHome className="navb-link-icon"  />
		</NavLink>
		
		<NavLink to='/search'  className="navb-link"  activeClassName="navb-link-icon-active">
			<AiOutlineSearch className="navb-link-icon" />
		</NavLink>

		<NavLink to='/notif/messages' isActive={(_, { pathname }) => ["/notif/messages", "/notif/notifications"].includes(pathname)}   className="navb-link" activeClassName="navb-link-icon-active">
			<AiOutlineBell className="navb-link-icon" />
		</NavLink>

		<NavLink to='/profile/routes' isActive={(_, { pathname }) => ["/profile/routes", "/profile/posts"].includes(pathname)} className="navb-link" activeClassName="navb-link-icon-active"> 
			<AiOutlineUser className="navb-link-icon" />
		</NavLink>

		<NavLink to='/menu'  className="navb-link" activeClassName="navb-link-icon-active">
			<AiOutlineMenu className="navb-link-icon" />
		</NavLink>
	  </div>
  );

};

export default Navbar;