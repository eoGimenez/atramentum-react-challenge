class CustomersService {
	constructor(token) {
		this.headers = { headers: { Authorization: `Bearer ${token}` } };
		this.API_URL = 'https://erp-api-dev-app.azurewebsites.net/akralogic/erp/api';
	}

	getCustomers() {
		return fetch(`${this.API_URL}/customers`, this.headers);
	}
	getCustomer(customerId) {
		return fetch(`${this.API_URL}/customers/${customerId}`, this.headers);
	}
	getCustomerWebs(customerId) {
		return fetch(`${this.API_URL}/customers/${customerId}/webs`, this.headers);
	}
	getCustomerType(customerId) {
		return fetch(`${this.API_URL}/customers/${customerId}/types`, this.headers);
	}
}

export default CustomersService;
