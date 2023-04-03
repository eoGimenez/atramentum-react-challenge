import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/auth.context';

export default function LoginPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();
	const API_URL = 'https://erp-api-dev-app.azurewebsites.net/akralogic/erp/api/authenticate';
	const { storeToken, isAuthenticated } = useContext(authContext);

	const submitHandler = (e) => {
		e.preventDefault();
		fetch(API_URL, {
			method: 'POST',
			body: new URLSearchParams({
				username: username,
				password: password,
			}),
		})
			.then((res) => res.json())
			.then((response) => {
				if (response.error) {
					setError(response.error);
					return;
				}
				storeToken(response.token);
				isAuthenticated();
				navigate('/customers');
			})
			.catch((err) => {
				console.log('Error del server: ', err);
				setError('Ha habido un error, intentelo nuevamente!');
			});
	};

	return (
		<div className='w-100 mx-auto'>
			<h1>LOGIN!</h1>
			<form onSubmit={submitHandler}>
				{error && (
					<div className='alert alert-danger' role='alert'>
						{error}
					</div>
				)}
				<div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className='form-label'>
						Username
					</label>
					<input
						type='text'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleInputPassword1' className='form-label'>
						Password
					</label>
					<input
						type='password'
						className='form-control'
						id='exampleInputPassword1'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type='submit' className='btn btn-primary'>
					Login
				</button>
			</form>
		</div>
	);
}
