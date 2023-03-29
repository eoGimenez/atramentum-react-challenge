import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProviderWrapper } from './contexts/auth.context';

createRoot(document.getElementById('app')).render(
	<React.StrictMode>
		<Router>
			<AuthProviderWrapper>
				<App />
			</AuthProviderWrapper>
		</Router>
	</React.StrictMode>
);
