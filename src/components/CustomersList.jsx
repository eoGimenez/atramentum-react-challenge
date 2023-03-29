import { useState } from 'react';
import CustomerDetail from './CustomerDetail';

export default function ({ customers }) {
	const [showDetail, setShowDetail] = useState(false);
	const [customer, setCustomer] = useState({});

	const handleClick = (customer) => {
		setShowDetail(!showDetail);
		setCustomer(customer);
	};

	return (
		<>
			{!showDetail &&  (
				<table className='table table-primary'>
					<thead>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>Name</th>
							<th scope='col'>email</th>
							<th scope='col'>Contact phone</th>
						</tr>
					</thead>
					<tbody>
						{customers.map((customer) => {
							return (
								<tr className='tr__hover' key={customer.id} onClick={() => handleClick(customer)}>
									<th scope='row'>{customer.id}</th>
									<td>{customer.contactName}</td>
									<td>{customer.email}</td>
									<td>{customer.phone1}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
			{showDetail && (
				<CustomerDetail handleClick={handleClick} customer={customer} />
			)}
		</>
	);
}
