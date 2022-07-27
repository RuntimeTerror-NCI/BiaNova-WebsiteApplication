import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import './index.css';
import Layout from './components/Pages/Layout';
import HomePage from './components/Pages/HomePage';
import Signup from './components/UserLinks/Signup';
import ForgotPassword from './components/UserLinks/ForgotPassword';
import Login from './components/UserLinks/Login';
import SearchPage from './components/Pages/SearchPage';
import CardView from './components/Pages/CardView';

function App() {
	const [token, setToken] = useState();

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />
					<Route path='/search' element={<SearchPage />} />
					<Route path='/recipe/:id' element={<CardView />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
