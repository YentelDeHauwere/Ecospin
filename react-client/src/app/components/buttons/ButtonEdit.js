import { default as React } from 'react';

import './Buttons.scss'

const ButtonEdit = ({ content }) => {

  return (
	  <button className="button-edit" type="edit"> { content } </button>
  );

};

export default ButtonEdit;