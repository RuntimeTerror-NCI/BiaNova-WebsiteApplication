import styled from 'styled-components';

import HeaderBrand from './HeaderBrand';
import HeaderLinks from './HeaderLinks';
import Burger from './Burger';

const HeaderStyled = styled.div`
	display: flex;
	align-content: space-between;
	justify-content: space-between;
	align-items: center;
	width: 80vw;
	margin: 1.4rem auto;
`;

function Header({ token, user }) {
	return (
		<HeaderStyled>
			<HeaderBrand />
			<Burger user={user} token={token} />
			<HeaderLinks user={user} token={token} />
		</HeaderStyled>
	);
}

export default Header;
