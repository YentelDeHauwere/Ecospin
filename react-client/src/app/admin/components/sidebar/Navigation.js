import { default as React } from 'react';
import { NavLink } from 'react-router-dom';

import * as Routes from '../../../routes';

import './Sidebar.scss';

const Navigation = ({children, className}) => {
  return (
    <ul className={className}>
		<li className="sidebar-nav-item home">        
		<NavLink to={Routes.HOME} activeClassName="active" className="sidebar-nav-link"><i className="fas fa-home"></i><span>Home</span></NavLink>
		</li>
		<li className="sidebar-nav-item">        
			<NavLink to={Routes.BACKOFFICE_POSTS} activeClassName="active" className="sidebar-nav-link"><i className="fas fa-edit"></i><span>Posts</span></NavLink>
		</li>
    </ul>
  );
};

export default Navigation;