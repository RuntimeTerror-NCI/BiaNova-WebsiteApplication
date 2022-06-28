import { useState } from 'react';
import logo from '../../assets/imgs/bold.png';

import Login from '../../components/Login/Login';
import Signup from '../Signup/Signup';
import './Header.css';

function Header() {
	const [showLogin, setShowLogin] = useState(false);
	const [showSignup, setShowSignup] = useState(false);

	return (
		<div className='Header'>
			{showLogin && <Login />} {showSignup && <Signup />}
			<div className='header-brand'>
				<img className='header-logo' alt='logo' src={logo} />

				<h1 className='header-h1'> BiaNova </h1>
			</div>
			<div className='login'>
				<p>
					<button onClick={() => setShowLogin(true)} className='header-btn'>
						{' '}
						Log In{' '}
					</button>{' '}
					|{' '}
					<button onClick={() => setShowSignup(true)} className='header-btn'>
						{' '}
						Sign Up{' '}
					</button>
				</p>
			</div>
		</div>
	);
}

export default Header;
