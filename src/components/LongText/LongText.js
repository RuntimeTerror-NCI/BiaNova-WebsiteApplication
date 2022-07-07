import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
	padding: 0.3rem 0.3rem;
	cursor: pointer;
	margin-left: 0.4rem;
	border: none;
	background-color: #d4e5f1;
	font-size: 0.7rem;
	transition: 0.2s all ease-in-out();
	&:hover {
		background-color: #bfdbf1;
	}
`;

function LongText({ content, limit }) {
	const [showAll, setShowAll] = useState(false);

	const showMore = () => setShowAll(true);
	const showLess = () => setShowAll(false);

	if (content.length <= limit) {
		return <div>{content}</div>;
	}

	if (showAll) {
		return (
			<div>
				{content}
				<Button onClick={showLess}>See Less</Button>
			</div>
		);
	}

	const toShow = `${content.substring(0, limit)}...`;
	return (
		<div>
			{toShow}
			<Button onClick={showMore}>See More</Button>
		</div>
	);
}

export default LongText;
