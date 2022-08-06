import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../../UI/StyledForm';
import { devices } from '../../mediaQueries/devices';

const StyledLinkNav = styled(StyledLink)`
	display: none;

	@media ${devices.tablet} {
		display: block;
	}
`;

const StyledLinkRN = styled(StyledLink)`
	display: none;

	@media ${devices.tablet} {
		display: block;
	}
`;

const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;
	font-size: 2rem;
	line-height: 5rem;
	margin-top: 0;
	li {
		padding: 18px 10px;
	}
	@media ${devices.tablet} {
		flex-flow: column nowrap;
		background-color: #0d2538;
		position: fixed;
		transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
		top: 0;
		right: 0;
		height: 100vh;
		width: 300px;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;
		li {
			color: #fff;
		}
	}
`;

const RightNav = ({ open, user, token }) => {
	return (
		<Ul open={open}>
			{!token ? (
				<div>
					<StyledLinkRN to='/login'>Log In</StyledLinkRN>
					<StyledLinkRN to='/signup'> Sign Up</StyledLinkRN>
				</div>
			) : (
				<div>
					<StyledLinkNav to='/dashboard'> Dashboard </StyledLinkNav>
					<StyledLinkNav to='/search'> Search </StyledLinkNav>
				</div>
			)}
		</Ul>
	);
};

export default RightNav;
