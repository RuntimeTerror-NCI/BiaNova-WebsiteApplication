import './index.css';
import Header from './components/Header/Header';
import HomePage from './components/Pages/HomePage';
import Footer from './components/Footer/Footer';
import SearchPage from './components/Pages/SearchPage';
import Signup from './components/Signup/Signup';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

function App() {
	return (
		<div>
			<Header />
			{/* <HomePage /> */}
			<SearchPage />
			<Footer />
		</div>
	);
}

export default App;
