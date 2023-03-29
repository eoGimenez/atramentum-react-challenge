import './App.css'
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CustomersPage from './pages/CustomersPage';
import EditCustomer from './pages/EditCustomer';



function App() {

  return (
    <div className="App">
    

       <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/customers' element={<CustomersPage />} />
        <Route path='/customers/:customerId' element={<EditCustomer />} />
      </Routes> 
    </div>
  )
}

export default App
