import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { authContext } from '../../contexts/auth.context';
import CustomersService from '../../services/customers.service';
import CustomerDetail from '../../components/CustomerDetail/CustomerDetail';
import './EditCustomer.css';
import WebsDetail from '../../components/CustomerDetail/WebsDetails';
import CustomersTypes from '../../components/CustomerDetail/CustomersTypes';
import EditCustomer from '../../components/EditComponents/EditCustomer';

export default function EditCustomerr() {
	const [customer, setCustomer] = useState({
		details: {},
		webs: [],
        types: []
	});
    const [showEdit, setShowEdit] = useState(false)
	const { customerId } = useParams();
	const { getToken } = useContext(authContext);
	const customersService = new CustomersService(getToken());

    const handleEdit = (showEdit) => {
        setShowEdit(showEdit)
    } 

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [customerData, customerWebsData, customersTypesData] = await Promise.all([
					customersService.getCustomer(customerId).then((response) => response.json()),
					customersService.getCustomerWebs(customerId).then((response) => response.json()),
					customersService.getCustomerType(customerId).then((response) => response.json()),
				]);
				setCustomer({
					details: customerData,
					webs: customerWebsData.content,
                    types: customersTypesData.content
				});
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
    
	return (
		<>
			{!showEdit && (<div className='edit__customer'>
				<CustomerDetail customer={customer.details} showEdit={showEdit} handleEdit={handleEdit} />
				<WebsDetail webs={customer.webs} />
                <CustomersTypes types={customer.types} />
			</div>)}
            {showEdit && <EditCustomer customer={customer.details} />}
		</>
	);
}
