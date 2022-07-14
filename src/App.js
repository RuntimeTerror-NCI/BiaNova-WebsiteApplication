import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import Layout from './components/Pages/Layout';
import HomePage from './components/Pages/HomePage';
import Signup from './components/UserLinks/Signup';
import ForgotPassword from './components/UserLinks/ForgotPassword';
import Login from './components/UserLinks/Login';
import SearchPage from './components/Pages/SearchPage';
import CardView from './components/Pages/CardView';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='/Login' element={<Login />} />
					<Route path='/Signup' element={<Signup />} />
					<Route path='/Forgot-password' element={<ForgotPassword />} />
					<Route path='/RecipeSearch' element={<SearchPage />} />
					<Route path='/recipe/:id' element={<CardView />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
