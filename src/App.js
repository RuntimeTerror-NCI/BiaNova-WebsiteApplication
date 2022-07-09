import './index.css';
import Header from './components/Header/Header';
import HomePage from './components/Pages/HomePage';
import Footer from './components/Footer/Footer';
import RecipeSearch from './components/RecipeSearch/RecipeSearch';

function App() {
	return (
		<div>
			<Header />
			<HomePage />
			{/* <RecipeSearch /> */}
			<Footer />
		</div>
	);
}

export default App;
