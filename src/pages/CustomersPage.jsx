import { useContext, useEffect, useState } from 'react';
import CustomersList from '../components/CustomersList';
import { authContext } from '../contexts/auth.context';
import CustomersService from '../services/customers.service';

export default function CustomersPage() {
	const [customers, setCustomers] = useState([]);
	const { getToken } = useContext(authContext);
    const [isLoading, setIsLoading] = useState(false)
	const customersService = new CustomersService(getToken());
	useEffect(() => {
		customersService
			.getCustomers()
			.then((res) => res.json())
			.then((response) => {
				setCustomers(response.content);
				setTimeout(() => {
					setIsLoading(!isLoading);
				}, 750);
			});
	}, []);
	console.log(customers);
	return (
		<>
			<div>
				{!isLoading && (
					<div className='spinner-border' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				)}
				{isLoading && <CustomersList customers={customers} />}
			</div>
		</>
	);
}
