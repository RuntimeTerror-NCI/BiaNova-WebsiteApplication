import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../assets/imgs/bold.png';

const HeaderBrandStyled = styled.div`
	display: flex;
	align-items: center;
`;

const HeaderImageStyled = styled.img`
	width: 2.75rem;

	@media screen and (max-width: 700px) {
		width: 2.4rem;
	}
`;

const HeaderLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

const HeaderHeadingStyled = styled.h1`
	font-size: 2.2rem;
	margin: auto 1.2rem;
	font-family: 'Bebas Neue', cursive;

	@media screen and (max-width: 700px) {
		font-size: 2rem;
	}
`;

function HeaderBrand() {
	return (
		<HeaderLink to='/'>
			<HeaderBrandStyled>
				<HeaderImageStyled alt='bianova logo' src={logo} />

				<HeaderHeadingStyled> BiaNova </HeaderHeadingStyled>
			</HeaderBrandStyled>
		</HeaderLink>
	);
}

export default HeaderBrand;
