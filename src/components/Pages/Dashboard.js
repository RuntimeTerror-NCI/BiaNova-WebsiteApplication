import { useNavigate } from 'react-router-dom';
import { PillButton } from '../../UI/Button.styles';
import styled from 'styled-components';
import EditProfile from '../Dashboard/EditProfile';
import Favorites from '../Dashboard/Favorites';

function Dashboard({ user, token }) {
	const navigate = useNavigate();

	const logout = () => {
		sessionStorage.clear();
		navigate('/');
		window.location.reload();
	};

	return (
		<DashboardCon>
			<Header>
				<h1>Hi there, {user} </h1>
				<PillButton onClick={() => logout()}>Logout</PillButton>
			</Header>
			<EditProfile user={user} token={token} />
			<h2>Favourites</h2>
			<Favorites user={user} token={token} />
		</DashboardCon>
	);
}

const DashboardCon = styled.div`
	font-weight: 300;
	display: flex;
	margin: auto;
	flex-direction: column;
	justify-content: center;
	flex: 1 0 auto;
`;

const Header = styled.div`
	display: flex;
	width: 100%;

	h1 {
		font-family: 'Poppins', sans-serif;
		font-size: 2rem;
		margin-top: 3rem;
		margin-bottom: 1.2rem;
		letter-spacing: 0.1rem;
		line-height: 4.5rem;
		text-align: center;
	}
`;

export default Dashboard;
