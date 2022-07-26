import styled from 'styled-components';
import { useState, useEffect } from 'react';

function Error({ errMsg }) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!errMsg) {
			setIsVisible(false);
			return;
		}

		setIsVisible(true);
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 6000);
		return () => clearTimeout(timer);
	}, [errMsg]);

	if (!isVisible) return null;

	return (
		<Frame>
			<Content>
				<p>{errMsg}</p>
			</Content>
		</Frame>
	);
}

const Frame = styled.div`
	width: fit-content;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, 25%);
	background-color: white;
	border-bottom: 0.2rem solid red;
	border-radius: 0.2rem;
	overflow: hidden;
`;

const Content = styled.div`
	padding: 0.8rem 1.5rem;
`;

export default Error;
