import styled from 'styled-components';
import { StyledLink } from '../../UI/StyledForm';

const Links = styled.div`
	display: flex;
	font-family: 'Montserrat', sans-serif;
`;

const LinksWrapper = styled.p`
	font-size: 1rem;
	font-weight: 500;
`;

function HeaderLinks() {
	return (
		<Links>
			<LinksWrapper>
				<StyledLink to='/login'>Log In</StyledLink> | <StyledLink to='/signup'>Sign Up</StyledLink>
			</LinksWrapper>
		</Links>
	);
}

export default HeaderLinks;
