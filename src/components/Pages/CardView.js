import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

const CardView = () => {
	const [data, setData] = useState({
		title: '',
		image: '',
		readyInMinutes: '',
		summary: '',
		analyzedInstructions: [],
		servings: '',
	});

	const { id } = useParams();

	const updateData = data => {
		setData(data);
	};

	useEffect(() => {
		axios
			.get(`https://bianova.herokuapp.com/externalApiId/${id}`, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
					'Access-Control-Allow-Headers':
						'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Allow-Origin, Access-Control-Request-Headers',
				},
			})
			.then(response => {
				console.log(response);

				if (response.data.analyzedInstructions[0] === undefined) {
					updateData({
						title: response.data.title,
						image: response.data.image,
						readyInMinutes: response.data.readyInMinutes,
						summary: response.data.summary,
						servings: response.data.servings,
					});
				} else if (response.data.analyzedInstructions[0].steps) {
					updateData({
						title: response.data.title,
						image: response.data.image,
						readyInMinutes: response.data.readyInMinutes,
						summary: response.data.summary,
						analyzedInstructions: response.data.analyzedInstructions[0].steps,
						servings: response.data.servings,
					});
				}
			})

			.catch(err => console.log(err));
	}, [id]);

	return (
		<Wrapper>
			<div>
				<Header>
					<ViewImage alt={data.title} src={data.image} />
					<ViewInfo>
						<h1>{data.title}</h1>
						{data.readyInMinutes ? (
							<p>
								<b>Cooking time:</b> {data.readyInMinutes} minutes
							</p>
						) : null}
						{data.servings ? <p>{data.servings} servings</p> : null}
					</ViewInfo>
				</Header>
				<Summary>
					<h1>Summary</h1>
					<p>{parse(data.summary)}</p>
				</Summary>
			</div>

			<div>
				{data.analyzedInstructions ? <h1>Instructions</h1> : null}
				{data.analyzedInstructions?.map(step => (
					<div key={step.number}>
						<p>
							{step.number}: {step.step}
						</p>
					</div>
				))}
			</div>

			<div>
				<Link to='/search'>SeachPage</Link>
			</div>
		</Wrapper>
	);
};
export default CardView;

export const Wrapper = styled.div`
	display: flex;
	width: 80vw;
	flex-wrap: wrap;
	margin: auto;
	flex: 1 0 auto;
`;

const Header = styled.div`
	display: flex;
	background-color: white;
	border-radius: 0.2rem;
	@media (max-width: 1000px) {
		flex-direction: column;
		max-width: 30rem;
	}
`;

const Summary = styled.div``;

export const ViewImage = styled.img`
	max-width: 30rem;
	border-bottom-left-radius: 0.2rem;
	border-top-left-radius: 0.2rem;
	@media (max-width: 1000px) {
		border-top-right-radius: 0.2rem;
	}
`;

export const ViewInfo = styled.div`
	margin-left: 2rem;
`;

export const ViewTitle = styled.div``;
