import styled from 'styled-components';

import HeaderBrand from './HeaderBrand';
import HeaderLinks from './HeaderLinks';
import BurgerMenu from './BurgerMenu';

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
			<BurgerMenu />
			<HeaderLinks token={token} user={user} />
		</HeaderStyled>
	);
}

export default Header;
