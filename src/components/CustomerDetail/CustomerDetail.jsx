import { Link } from 'react-router-dom';
import './CustomerDetail.css'

export default function CustomerDetail({ customer, handleClick }) {
	const { createdDate } = customer;
	const date = new Date(createdDate).toLocaleDateString();

	return (
		<div className='card text-center'>
			<div className='card-header'>
				id: {customer.id} - Name: {customer.contactName}
			</div>
			<div className='card-body testeando'>
				<h5 className='card-title'>{customer.refererOtherInfo}</h5>
				<p className='card-text'>{customer.observations}</p>
				<div>
					<p onClick={() => handleClick()} className='btn btn-primary'>
						Go back
					</p>
					<Link to={'/customers/' + customer.id} customer={customer} className='btn btn-primary'>
						Edit
					</Link>
				</div>
			</div>
			<div className='card-footer text-body-secondary'>Created: {date}</div>
		</div>
	);
}
