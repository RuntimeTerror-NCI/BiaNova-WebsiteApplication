import './Landing.css';

function Landing() {
	return (
		<div className='landing-container'>
			<div className='landing-content'>
				<h1>Welcome to BiaNova!</h1>
				<p>
					{' '}
					Simply scan or enter the ingredients that you think might be the closest to what you’d
					like to eat and hit enter. Our machine elves will send you an assortment of recipes to
					choose from. Bianova tells you what you need to know and then gets out of the way. And
					don’t you know it – we might be just the one thing between you and another late-night
					takeaway.
				</p>
			</div>

			<img className='landing-image' alt='landing' src={require('../assets/imgs/Chef.png')} />
		</div>
	);
}

export default Landing;
