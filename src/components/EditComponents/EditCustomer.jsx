import { useContext, useState } from 'react';
import { authContext } from '../../contexts/auth.context';

export default function EditContacts({ customer, handleEdit }) {
	const { getToken } = useContext(authContext);
	const token = getToken();
	const API_URL = 'https://erp-api-dev-app.azurewebsites.net/akralogic/erp/api/customers';
	const [newCustomer, setNewCustomer] = useState({});

	const [form, setForm] = useState({
		id: customer.id ?? '',
		phone1: customer.phone1 ?? '',
		obervations: customer.obervations ?? '',
		email: customer.email ?? '',
		contactName: customer.contactName ?? '',
		contactTime: customer.contactTime ?? '',
		lastModifiedBy: customer.lastModifiedBy ?? '',
		dataCsvFtp: customer.dataCsvFtp ?? '',
		commercialAgentId: customer.commercialAgentId ?? '',
		phone2: customer.phone2 ?? '',
		customerCategoryId: customer.customerCategoryId ?? '',
		agreeCommercials: customer.agreeCommercials ?? '',
		canContactPhone: customer.canContactPhone ?? '',
		refererTypeId: customer.refererTypeId ?? '',
		canSendMail: customer.canSendMail ?? '',
		downloadCsv: customer.downloadCsv ?? '',
		password: customer.password ?? '',
		performanceTypeId: customer.performanceTypeId ?? '',
		agreeTerms: customer.agreeTerms ?? '',
		refererOthersInfo: customer.refererOthersInfo ?? '',
		ordersOnlyPaymentProof: customer.ordersOnlyPaymentProof ?? '',
		sectorId: customer.sectorId ?? '',
		lastModifiedDate: customer.lastModifiedDate ?? '',
		ordersOnlyMoneyInAccount: customer.ordersOnlyMoneyInAccount ?? '',
		preferredCompanyBankAccountId: customer.preferredCompanyBankAccountId ?? '',
		fareRateId: customer.fareRateId ?? ' ',
		sendCsvDaily: customer.sendCsvDaily ?? ' ',
		deleted: customer.deleted ?? '',
		createdDate: customer.createdDate ?? '',
		sendCsvWeekly: customer.sendCsvWeekly ?? '',
		createdBy: customer.createdBy ?? '',
		numberAccessWeb: customer.numberAccessWeb ?? '',
		originPage: customer.originPage ?? '',
		eccomerceId: customer.eccomerceId ?? '',
		activated: customer.activated ?? '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const putOptions = {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
				accept: 'application/json',
			},
			body: JSON.stringify(form),
		};
		fetch(`${API_URL}/${customer.id}`, putOptions)
			.then((res) => res.json())
			.then((response) => {
				setNewCustomer(response);
				handleEdit(false);
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.contactName}
						onChange={(e) => setForm({ ...form, contactName: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Name</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.phone1}
						onChange={(e) => setForm({ ...form, phone1: e.target.value })}
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
						onChange={(e) => setForm({ ...form, email: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Email address</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.obervations}
						onChange={(e) => setForm({ ...form, obervations: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Obervations</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.contactTime}
						onChange={(e) => setForm({ ...form, contactTime: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Contact Time</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.dataCsvFtp}
						onChange={(e) => setForm({ ...form, dataCsvFtp: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Csv Ftp</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.commercialAgentId}
						onChange={(e) => setForm({ ...form, commercialAgentId: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Commercial Agent Id</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.phone2}
						onChange={(e) => setForm({ ...form, phone2: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Phone 2</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.customerCategoryId}
						onChange={(e) => setForm({ ...form, customerCategoryId: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Category Id</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.refererTypeId}
						onChange={(e) => setForm({ ...form, refererTypeId: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Referer Type Id</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.password}
						onChange={(e) => setForm({ ...form, password: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Password</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.performanceTypeId}
						onChange={(e) => setForm({ ...form, performanceTypeId: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Performance Type Id</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.refererOthersInfo}
						onChange={(e) => setForm({ ...form, refererOthersInfo: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Referer Others Info</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.sectorId}
						onChange={(e) => setForm({ ...form, sectorId: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Sector Id</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.lastModifiedDate}
						onChange={(e) => setForm({ ...form, lastModifiedDate: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Last Modified Date</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.lastModifiedBy}
						onChange={(e) => setForm({ ...form, lastModifiedBy: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Last Modified By</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.preferredCompanyBankAccountId}
						onChange={(e) => setForm({ ...form, preferredCompanyBankAccountId: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Bank Account Id</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.fareRateId}
						onChange={(e) => setForm({ ...form, fareRateId: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Fare Rate Id</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.createdDate}
						onChange={(e) => setForm({ ...form, createdDate: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Created Date</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.createdBy}
						onChange={(e) => setForm({ ...form, createdBy: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Created By</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.numberAccessWeb}
						onChange={(e) => setForm({ ...form, numberAccessWeb: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Number Access Web</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.originPage}
						onChange={(e) => setForm({ ...form, originPage: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Origin Page</label>
				</div>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
						value={form.eccomerceId}
						onChange={(e) => setForm({ ...form, eccomerceId: e.target.value })}
					/>
					<label htmlFor='floatingInput'>Eccomerce Id</label>
				</div>
				<div className='col-md-4'>
					<select
						id='inputState'
						className='form-select'
						onChange={(e) => setForm({ ...form, sendCsvWeekly: e.target.value })}
					>
						<option>{'Send Csv Weekly: ' + form.sendCsvWeekly}</option>
						<option>false</option>
						<option>true</option>
					</select>
				</div>
				<div className='col-md-4'>
					<select
						id='inputState'
						className='form-select'
						onChange={(e) => setForm({ ...form, sendCsvDaily: e.target.value })}
					>
						<option>{'Sends Csv Daily: ' + form.sendCsvDaily}</option>
						<option>false</option>
						<option>true</option>
					</select>
				</div>
				<div className='col-md-4'>
					<select
						id='inputState'
						className='form-select'
						onChange={(e) => setForm({ ...form, ordersOnlyMoneyInAccount: e.target.value })}
					>
						<option>{'Orders only money in Account: ' + form.ordersOnlyMoneyInAccount}</option>
						<option>false</option>
						<option>true</option>
					</select>
				</div>
				<div className='col-md-4'>
					<select
						id='inputState'
						className='form-select'
						onChange={(e) => setForm({ ...form, agreeTerms: e.target.value })}
					>
						<option>{'Agree Terms: ' + form.agreeTerms}</option>
						<option>false</option>
						<option>true</option>
					</select>
				</div>
				<div className='col-md-4'>
					<select
						id='inputState'
						className='form-select'
						onChange={(e) => setForm({ ...form, ordersOnlyPaymentProof: e.target.value })}
					>
						<option>{'Orders only payment Proof: ' + form.ordersOnlyPaymentProof}</option>
						<option>false</option>
						<option>true</option>
					</select>
				</div>
				<div className='col-md-4'>
					<select
						id='inputState'
						className='form-select'
						onChange={(e) => setForm({ ...form, agreeCommercials: e.target.value })}
					>
						<option>{'Agree Comercials: ' + form.agreeCommercials}</option>
						<option>false</option>
						<option>true</option>
					</select>
				</div>
				<div className='col-md-4'>
					<select
						id='inputState'
						className='form-select'
						onChange={(e) => setForm({ ...form, canContactPhone: e.target.value })}
					>
						<option>{'Can contact by phone: ' + form.canContactPhone}</option>
						<option>false</option>
						<option>true</option>
					</select>
				</div>
				<div className='col-md-4'>
					<select
						id='inputState'
						className='form-select'
						onChange={(e) => setForm({ ...form, canSendMail: e.target.value })}
					>
						<option>{'Can send mail: ' + form.canSendMail}</option>
						<option>false</option>
						<option>true</option>
					</select>
				</div>
				<div className='col-md-4'>
					<select
						id='inputState'
						className='form-select'
						onChange={(e) => setForm({ ...form, downloadCsv: e.target.value })}
					>
						<option>{'Download Csv: ' + form.downloadCsv}</option>
						<option>false</option>
						<option>true</option>
					</select>
				</div>
				<div className='col-md-4'>
					<select
						id='inputState'
						className='form-select'
						onChange={(e) => setForm({ ...form, deleted: e.target.value })}
					>
						<option>{'is deleted: ' + form.deleted}</option>
						<option>false</option>
						<option>true</option>
					</select>
				</div>
				<div className='col-md-4'>
					<select
						id='inputState'
						className='form-select'
						onChange={(e) => setForm({ ...form, activated: e.target.value })}
					>
						<option>{'is Activated: ' + form.activated}</option>
						<option>false</option>
						<option>true</option>
					</select>
				</div>
				<p>Last in modified: {form.lastModifiedBy}</p>
				<br />
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</>
	);
}
