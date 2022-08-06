import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Pages/Layout';
import HomePage from './components/Pages/HomePage';
import Signup from './components/UserLinks/Signup';
import ForgotPassword from './components/UserLinks/ForgotPassword';
import Login from './components/UserLinks/Login';
import SearchPage from './components/Pages/SearchPage';
import CardView from './components/Pages/CardView';
import PrivateRoutes from './utils/PrivateRoutes';
import Dashboard from './components/Pages/Dashboard';
import useToken from './utils/useToken';
import useUser from './utils/useUser';

function App() {
	const { token, setToken } = useToken();
	const { user, setUser } = useUser();

	console.log(user, token);
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Layout token={token} user={user} />}>
					<Route index element={<HomePage token={token} user={user} />} />
					<Route path='/login' element={<Login setToken={setToken} setUser={setUser} />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />
					<Route path='/search' element={<SearchPage token={token} user={user} />} />
					<Route path='/recipe/:id' element={<CardView />} />
					<Route element={<PrivateRoutes token={token} />}>
						<Route path='dashboard' element={<Dashboard token={token} user={user} />} />
					</Route>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
