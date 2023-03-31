import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerDetail from '../CustomerDetail/CustomerDetail';
import './CustomerList.css';

export default function ({ customers }) {
	const [showDetail, setShowDetail] = useState(false);
	const [customer, setCustomer] = useState({});
	const navigate = useNavigate()
	const handleClick = (customer) => {
		//setShowDetail(!showDetail);
		setCustomer(customer);
		navigate(`/customers/${customer.id}`)
	};

	return (
		<div id='table__'>
			<div className='table__'>
				{!showDetail && (
					<table className='table'>
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
				{showDetail && <CustomerDetail handleClick={handleClick} customer={customer} />}
			</div>
		</div>
	);
}
