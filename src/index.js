import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { UserContextProvider } from './contexts/user.context';
import { ProductContextProvider } from './contexts/product.context';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

const rootElement = document.getElementById('root');

render(
	<React.StrictMode>
		<BrowserRouter>
			<UserContextProvider>
				<ProductContextProvider>
					<App />
				</ProductContextProvider>
			</UserContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
	rootElement
);
