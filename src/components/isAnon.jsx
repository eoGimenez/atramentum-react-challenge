import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../contexts/auth.context';

export default function IsAnon({ children }) {
	const { isLoading, isLoggedIn } = useContext(authContext);

	if (isLoading)
		return (
			<div className='spinner-border' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</div>
		);
        if(isLoggedIn) return (<Navigate to="/customers" />)
        else return(<>{children}</>);
}
