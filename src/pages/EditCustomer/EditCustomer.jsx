import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { authContext } from '../../contexts/auth.context';
import CustomersService from '../../services/customers.service';
import './EditCustomer.css'

export default function EditCustomer() {
	const [customer, setCustomer] = useState({});
	const [form, setForm] = useState({
		id: '',
		name: '',
		phone: '',
		email: '',
		contactRoleId: '',
		morningEndHour: '',
		morningInitHour: '',
		afternoonInitHour: '',
		afternoonEndHour: '',
	});
	const { customerId } = useParams();
	const { getToken } = useContext(authContext);
	const customersService = new CustomersService(getToken());

	useEffect(() => {
		customersService
			.getCustomerById(customerId)
			.then((res) => res.json())
			.then((response) => {
				setCustomer(response);
			});
	}, []);
	useEffect(() => {
		setForm({
			id: customer.id,
			name: customer.name,
			phone: customer.phone,
			email: customer.email,
			contactRoleId: customer.contactRoleId,
			morningEndHour: customer.morningEndHour,
			morningInitHour: customer.morningInitHour,
			afternoonInitHour: customer.afternoonInitHour,
			afternoonEndHour: customer.afternoonEndHour,
		});
	}, [customer]);

	const handleSubmit = (e) => {
		e.preventDefault();
		
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.name}
						onChange={(e) => setForm({ ...form, name: e.target.value})}
					/>
					<label htmlFor='floatingInput'>Name</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.phone}
						onChange={(e) => setForm({ ...form, phone: e.target.value})}
					/>
					<label htmlFor='floatingInput'>Phone contact</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='email'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.email}
						onChange={(e) => setForm({ ...form, email: e.target.value})}
					/>
					<label htmlFor='floatingInput'>Email address</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.morningInitHour}
						onChange={(e) => setForm({ ...form, morningInitHour: e.target.value})}
					/>
					<label htmlFor='floatingInput'>Morning Init Hour</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.morningEndHour}
						onChange={(e) => setForm({ ...form, morningEndHour: e.target.value})}
					/>
					<label htmlFor='floatingInput'>Morning End Hour</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.afternoonInitHour}
						onChange={(e) => setForm({ ...form, afternoonInitHour: e.target.value})}
					/>
					<label htmlFor='floatingInput'>Afternoon Init Hour</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.afternoonEndHour}
						onChange={(e) => setForm({ ...form, afternoonEndHour: e.target.value})}
					/>
					<label htmlFor='floatingInput'>Afternoon End Hour</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.contactRoleId}
						onChange={(e) => setForm({ ...form, contactRoleId: e.target.value})}
					/>
					<label htmlFor='floatingInput'>Contact Role</label>
				</div>

				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</>
	);
}
