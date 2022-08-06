import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../../UI/StyledForm';
import { devices } from '../../mediaQueries/devices';

const StyledLinkNav = styled(StyledLink)`
	display: none;
	color: #779fd4;

	&:hover {
		color: whitesmoke;
	}

	@media ${devices.tablet} {
		display: block;
	}
`;

const StyledLinkRN = styled(StyledLink)`
	display: none;
	color: #779fd4;

	&:hover {
		color: whitesmoke;
	}

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
		background-color: #24272b;
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

const RightNav = ({ open, user, token, setOpen }) => {
	return (
		<Ul open={open}>
			{!token ? (
				<div>
					<StyledLinkRN onClick={() => setOpen(prev => !prev)} to='/login'>
						Log In
					</StyledLinkRN>
					<StyledLinkRN onClick={() => setOpen(prev => !prev)} to='/signup'>
						{' '}
						Sign Up
					</StyledLinkRN>
				</div>
			) : (
				<div>
					<StyledLinkNav onClick={() => setOpen(prev => !prev)} to='/'>
						{' '}
						Home{' '}
					</StyledLinkNav>
					<StyledLinkNav onClick={() => setOpen(prev => !prev)} to='/dashboard'>
						{' '}
						Dashboard{' '}
					</StyledLinkNav>
					<StyledLinkNav onClick={() => setOpen(prev => !prev)} to='/search'>
						{' '}
						Search{' '}
					</StyledLinkNav>
				</div>
			)}
		</Ul>
	);
};

export default RightNav;
