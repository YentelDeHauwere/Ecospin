import { default as React, useState } from 'react';

import * as Routes from '../routes';
import { useAuth } from '../services';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


import { ButtonLarge } from '../components'

const SignUpPage = ({children}) => {
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
		<h5 className="card-title text-left">SIGN UP</h5>
		<form className="form-signin" onSubmit={(ev) => handleSubmit(ev)}>
		<div>
				<div className="auth-buttons">
					<button className="btn btn-lg btn-facebook" type="submit"><i className="fab fa-facebook-f mr-2"></i> Facebook </button>
					<button className="btn btn-lg btn-google" type="submit"><i className="fab fa-google mr-2"></i> Google </button>
				</div>
				<p className="auth-divider">or sign up with email</p>
				<div className="auth-group"> 
					<div className="form-label-group">
						{/* <label className="form-label" for="fname">First name</label> */}
						<i className="fas fa-user"></i>
						<input type="text" id="inputFirstName" className="form-control" autoFocus placeholder="First Name" />
					</div>
					<div className="form-label-group">
						{/* <label className="form-label" for="fname">Last Name</label> */}
						<i className="fas fa-user"></i>
						<input type="text" id="inputLastName" className="form-control" placeholder="Last Name" />
					</div>
					<div className="form-label-group">
						{/* <label className="form-label" for="fname">Email</label>	 */}
						<i className="fas fa-envelope"></i>
						<input type="email" id="inputEmail" className="form-control" placeholder="Email" required onChange={(ev) => setEmail(ev.target.value)} />
					</div>
					<div className="form-label-group">
						{/* <label className="form-label" for="fname">Password</label> */}
						<i className="fas fa-lock"></i>
						<input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={(ev) => setPassword(ev.target.value)} />                    
					</div>
					<div className="form-label-group">
						{/* <label className="form-label" for="fname">Repeat Password</label> */}
						<i className="fas fa-lock"></i>
						<input type="password" id="inputRepeatPassword" className="form-control" placeholder="Repeat Password"/>                    
					</div>
				</div>
				<ButtonLarge content="Sign Up" />
			</div>
			<div className="auth-bottom" ><p>Already have an account? <Link to="/auth/signin"><b className="auth-bottom-bold" >Sign In</b></Link></p></div>
		</form>
	</div>
  );
};

export default SignUpPage;