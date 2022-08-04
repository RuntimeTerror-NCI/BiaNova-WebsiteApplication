import { useNavigate } from 'react-router-dom';
import { PillButton } from '../../UI/Button.styles';
import styled from 'styled-components';
import Favorites from '../Dashboard/Favorites';

function Dashboard({ user, token, recipesLiked, setRecipesLiked }) {
	const navigate = useNavigate();

	const logout = () => {
		sessionStorage.clear();
		navigate('/');
		window.location.reload();
	};

	return (
		<div>
			<DashboardCon>
				<Header>
					<h2>Hi there, {user} </h2>
				</Header>

				<PillButton onClick={() => logout()}>Logout</PillButton>

				<h2>Favourites</h2>
				<Favorites
					user={user}
					token={token}
					ecipesLiked={recipesLiked}
					setRecipesLiked={setRecipesLiked}
				/>
			</DashboardCon>
		</div>
	);
}

const DashboardCon = styled.div`
	font-weight: 300;
	display: flex;
	margin: auto;
	flex-direction: column;
	justify-content: center;
	flex: 1 1 auto;

	h2 {
		text-align: center;
	}
`;

const Header = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;

	h1 {
		font-family: 'Poppins', sans-serif;
		margin-top: 3rem;
		margin-bottom: 1.2rem;
		letter-spacing: 0.1rem;
		line-height: 4.5rem;
	}
`;

export default Dashboard;
