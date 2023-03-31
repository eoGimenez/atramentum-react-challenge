import { Link } from 'react-router-dom';
import './CustomerDetail.css'

export default function CustomerDetail({ customer, showEdit, handleEdit }) {
	
	const { createdDate } = customer;
	const date = new Date(createdDate).toLocaleDateString();

	return (
		<div className='card text-center'>
			<div className='card-header'>
				id: {customer.id} - Name: {customer.name}
			</div>
			<div className='card-body testeando'>
				<h5 className='card-title'>{customer.email}</h5>
				<p className='card-text'>Contacto Rol: {customer.refererOthersInfo}</p>
				<div>
					<p  className='btn btn-primary'>
						Go back
					</p>
					<p onClick={() => handleEdit(!showEdit)} customer={customer} className='btn btn-primary'>
						Edit
					</p>
				</div>
			</div>
			<div className='card-footer text-body-secondary'>Created: {date}</div>
		</div>
	);
}
