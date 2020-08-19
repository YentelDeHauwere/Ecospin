import { default as React } from 'react';

import './Buttons.scss'

const ButtonLargeOutline = ({ content }) => {

  return (
	  <button className="btn btn-lg btn-primary btn-block button-large outline" type="submit"> { content } </button>
  );

};

export default ButtonLargeOutline;