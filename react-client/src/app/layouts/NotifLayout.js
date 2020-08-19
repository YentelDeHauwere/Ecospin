import React, { } from 'react';
import { Navbar } from '../components';

import './NotifLayout.scss';

const NotifLayout = ({ children }) => {

  return (
    <div className="notif">
      {children}
	  <Navbar />
    </div>
  )
};
export default NotifLayout;