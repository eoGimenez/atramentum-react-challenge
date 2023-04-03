import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/auth.context';
import './Navbar.css';

export default function Navbar() {
	const { deleteToken, isAuthenticated } = useContext(authContext);
	const navigate = useNavigate();

	const handleLogout = () => {
		deleteToken();
		isAuthenticated();
		navigate('/');
	};
	return (
		<nav className='navbar navbar-expand-lg'>
			<div className='container-fluid'>
				<Link to='https://www.linkedin.com/company/atramentum-sl/about/'>
					<p className='brand'>Atramentum</p>
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link to='/' className='nav-link active' aria-current='page'>
								Home
							</Link>
						</li>
					</ul>
					<ul className='navbar-nav '>
						<li className='nav-item'>
							<p onClick={handleLogout}>Log Out</p>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
