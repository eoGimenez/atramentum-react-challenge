import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import CustomersPage from './pages/CustomerPage/CustomersPage';
import Navbar from './components/Navbar/Navbar';
import IsAnon from './components/isAnon';
import IsPrivate from './components/isPrivate';
import EditCustomerr from './pages/EditCustomer/EditCustomer';

function App() {
	return (
		<>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={
							<IsAnon>
								<LoginPage />
							</IsAnon>
						}
					/>
					<Route
						path='/customers'
						element={
							<IsPrivate>
								{' '}
								<CustomersPage />
							</IsPrivate>
						}
					/>
					<Route
						path='/customers/:customerId'
						element={
							<IsPrivate>
								<EditCustomerr />
							</IsPrivate>
						}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
