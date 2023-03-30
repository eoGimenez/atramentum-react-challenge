
class CustomersService {
    constructor(token) {
        this.headers = {headers: {Authorization: `Bearer ${token}`}}
        this.API_URL = "https://erp-api-dev-app.azurewebsites.net/akralogic/erp/api"
    }
    
    getCustomers() {
        return fetch(`${this.API_URL}/customers`, this.headers)
    }
    getCustomerById (customerId) {
        return fetch(`${this.API_URL}/customers/invoiceData/contacts/${customerId}`, this.headers)
    }
 //   putEditCustomer (customerId, customerData)
}

export default CustomersService;