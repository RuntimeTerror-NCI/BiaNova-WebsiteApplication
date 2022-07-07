import styled from 'styled-components';

const SearchContainer = styled.div`
	text-align: center;
	margin: auto;
	width: 75%;

	h1 {
		font-size: 2rem;
		letter-spacing: 0.1rem;
	}

	p {
		width: 80%;
		margin: auto;
		font-size: 1.2rem;
		line-height: 1.5rem;
		margin-top: 2rem;
		letter-spacing: 0.1rem;
		padding-bottom: 1rem;
	}

	@media screen and (max-width: 1100px) {
		h1 {
			font-size: 1.6rem;
		}

		p {
			font-size: 1rem;
		}
	}
`;

export default SearchContainer;
