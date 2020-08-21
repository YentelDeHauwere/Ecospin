import { default as React, useState } from 'react';

import * as Routes from '../routes';
import { useAuth } from '../services';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


import { ButtonLarge } from '../components'

const SignInPage = () => {
  const { signInLocal } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const user = await signInLocal(email, password);
    if (user) {
      history.push(Routes.HOME);
    }
  }



  return (
	<div className="card-body">
		<h5 className="card-title text-left">LOG IN</h5>
		<form className="form-signin" onSubmit={(ev) => handleSubmit(ev)}>

			<div>
				<div className="auth-buttons">
					<button className="btn btn-lg btn-facebook" type="submit"><i className="fab fa-facebook-f mr-2"></i> Facebook </button>
					<button className="btn btn-lg btn-google" type="submit"><i className="fab fa-google mr-2"></i> Google </button>
				</div>
				<p className="auth-divider">or log in with email</p>
				<div className="auth-group"> 
					<div className="form-label-group">
						<i className="fas fa-envelope"></i>
						<input type="email" id="inputEmail" className="form-control" placeholder="Email" required autoFocus onChange={(ev) => setEmail(ev.target.value)} />
					</div>
					<div className="form-label-group">
						<i className="fas fa-lock"></i>
						<input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={(ev) => setPassword(ev.target.value)} />                    
					</div>
				</div>
				<div>
					<ButtonLarge content="Sign In" />
					<div className="auth-forgot-pw"><p>Forgot your password?</p></div>
				</div>
			</div>
		<div className="auth-bottom" ><p>Don't have an account yet? <Link to="/auth/signup"><b className="auth-bottom-bold">Sign Up</b></Link></p></div>
		</form>
	</div>
  );
};

export default SignInPage;