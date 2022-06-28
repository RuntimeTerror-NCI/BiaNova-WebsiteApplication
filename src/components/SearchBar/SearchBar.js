import './SearchBar.css';

function SearchBar() {
	return (
		<div>
			<form action='/' method='get' className='searchbar'>
				<label htmlFor='header-search'>
					<span className='visually-hidden'></span>
				</label>
				<input type='text' id='header-search' placeholder='Search Recipes' />
				<button className='search-btn' type='submit'>
					&#127859;
				</button>
			</form>
		</div>
	);
}

export default SearchBar;
