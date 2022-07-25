import PacmanLoader from 'react-spinners/PacmanLoader';
import styled from 'styled-components';

function Spinner({ loading }) {
	return (
		<Frame>
			<Loader>
				<PacmanLoader
					color={'orange'}
					loading={loading}
					speedMultiplier={0.8}
					size={25}
					margin={2}
				/>
			</Loader>
		</Frame>
	);
}

const Loader = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 35%;
	left: 50%;
	text-align: center;
`;

const Frame = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	overflow: hidden;
`;

export default Spinner;
