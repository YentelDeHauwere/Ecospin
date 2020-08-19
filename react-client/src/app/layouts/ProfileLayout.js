import React, { } from 'react';
import { Navbar } from '../components';
import { MdAddToPhotos } from "react-icons/md";

import './ProfileLayout.scss';

const ProfileLayout = ({ children }) => {

  return (
    <div className="profile">
	  <div className="button-add-image">
		<MdAddToPhotos/>
	  </div>
      {children}
	  <Navbar />
    </div>
  )
};
export default ProfileLayout;