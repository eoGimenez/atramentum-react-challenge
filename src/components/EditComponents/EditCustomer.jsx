import { useContext, useState } from 'react';
import { authContext } from '../../contexts/auth.context';


export default function EditContacts({ customer }) {
	const { getToken } = useContext(authContext);
    const API_URL = 'https://erp-api-dev-app.azurewebsites.net/akralogic/erp/api/customers'
	const [form, setForm] = useState({
		id: customer.id,
		phone1: customer.phone1,
		obervations: customer.obervations,
		email: customer.email,
		contactName: customer.contactName,
		contactTime: customer.contactTime,
		lastModifiedBy: customer.lastModifiedBy,
        dataCsvFtp: customer.dataCsvFtp,
        commercialAgentId: customer.commercialAgentId,
        phone2: customer.phone2,
        customerCategoryId: customer.customerCategoryId,
        agreeCommercials: customer.agreeCommercials,
        canContactPhone: customer.canContactPhone,
        refererTypeId: customer.refererTypeId,
        canSendMail: customer.canSendMail,
        downloadCsv: customer.downloadCsv,
        password: customer.password,
        performanceTypeId: customer.performanceTypeId,
        agreeTerms: customer.agreeTerms,
        refererOthersInfo: customer.refererOthersInfo,
        ordersOnlyPaymentProof: customer.ordersOnlyPaymentProof,
        sectorId: customer.sectorId,
        lastModifiedDate: customer.lastModifiedDate,
        ordersOnlyMoneyInAccount: customer.ordersOnlyMoneyInAccount,
        preferredCompanyBankAccountId: customer.preferredCompanyBankAccountId,
        fareRateId: customer.fareRateId,
        sendCsvDaily: customer.sendCsvDaily,
        deleted: customer.deleted,
        createdDate: customer.createdDate,
        sendCsvWeekly: customer.sendCsvWeekly,
        createdBy: customer.createdBy,
        numberAccessWeb: customer.numberAccessWeb,
        originPage: customer.originPage,
        eccomerceId: customer.eccomerceId,
        activated: customer.activated
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(API_URL+customer.id, {
            method: 'PUT',
            headers: getToken(),
			body: {
                id: form.id,
                phone1: form.phone1,
                obervations: form.obervations,
                email: form.email,
                contactName: form.contactName,
                contactTime: form.contactTime,
                lastModifiedBy: form.lastModifiedBy,
                dataCsvFtp: form.dataCsvFtp,
                commercialAgentId: form.commercialAgentId,
                phone2: form.phone2,
                customerCategoryId: form.customerCategoryId,
                agreeCommercials: form.agreeCommercials,
                canContactPhone: form.canContactPhone,
                refererTypeId: form.refererTypeId,
                canSendMail: form.canSendMail,
                downloadCsv: form.downloadCsv,
                password: form.password,
                performanceTypeId: form.performanceTypeId,
                agreeTerms: form.agreeTerms,
                refererOthersInfo: form.refererOthersInfo,
                ordersOnlyPaymentProof: form.ordersOnlyPaymentProof,
                sectorId: form.sectorId,
                lastModifiedDate: form.lastModifiedDate,
                ordersOnlyMoneyInAccount: form.ordersOnlyMoneyInAccount,
                preferredCompanyBankAccountId: form.preferredCompanyBankAccountId,
                fareRateId: form.fareRateId,
                sendCsvDaily: form.sendCsvDaily,
                deleted: form.deleted,
                createdDate: form.createdDate,
                sendCsvWeekly: form.sendCsvWeekly,
                createdBy: form.createdBy,
                numberAccessWeb: form.numberAccessWeb,
                originPage: form.originPage,
                eccomerceId: form.eccomerceId,
                activated: form.activated
            },
		});
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
				<p>Last in modified: {form.lastModifiedBy}</p>
				<br />
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</>
	);
}
