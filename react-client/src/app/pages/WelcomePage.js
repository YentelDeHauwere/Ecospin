import { default as React} from 'react';
import { ButtonLarge } from '../components';
import { Link } from 'react-router-dom';

const WelcomePage = () => {

  return (
	  <div className="page-welcome">
		<div className="welcome-background"></div>
		<div className="welcome-content">
			<div className="welcome-content-header">
				<img className="welcome-content-header-logo" src={require('../_static/images/ecospin_logo.png')} alt="ecospin" />
			</div>
			<div className="welcome-content-action">
				<Link to="/auth/signup"><ButtonLarge content="Get Started" /></Link>
				<Link to="/auth/signin"><div className="auth-bottom white" ><p>Already have an account? <b className="auth-bottom-bold">Log In</b> </p></div></Link>
			</div>	
		</div>
	</div>
  );
};

export default WelcomePage;