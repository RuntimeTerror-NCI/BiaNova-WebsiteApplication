import { useNavigate } from 'react-router-dom';
import { LogOutBtn } from '../../UI/Button.styles';
import styled from 'styled-components';
import Favorites from '../Dashboard/Favorites';
import { Frame } from '../../UI/StyledForm';

function Dashboard({ user, token, recipesLiked, setRecipesLiked }) {
	const navigate = useNavigate();

	const logout = () => {
		sessionStorage.clear();
		navigate('/');
		window.location.reload();
	};

	return (
		<Frame>
			<div>
				<DashboardCon>
					<Header>
						<h2>Hi there, {user} </h2>
					</Header>

					<LogOutBtn onClick={() => logout()}>Logout</LogOutBtn>

					<h2>Your Favourites</h2>
					<Favorites
						user={user}
						token={token}
						ecipesLiked={recipesLiked}
						setRecipesLiked={setRecipesLiked}
					/>
				</DashboardCon>
			</div>
		</Frame>
	);
}

const DashboardCon = styled.div`
	font-weight: 300;
	display: flex;
	margin: auto;
	flex-direction: column;
	justify-content: center;
	flex: 1 1 auto;
	align-items: center;

	h2 {
		font-size: 2rem;
		margin-top: 3rem;
		margin-bottom: 1.2rem;
		letter-spacing: 0.1rem;
		line-height: 1rem;
	}
`;

const Header = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
`;

export default Dashboard;
