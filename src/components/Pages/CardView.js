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
					console.log('error');
					updateData({
						title: response.data.title,
						image: response.data.image,
						readyInMinutes: response.data.readyInMinutes,
						summary: response.data.summary,
					});
				} else if (response.data.analyzedInstructions[0].steps) {
					console.log('success');
					updateData({
						title: response.data.title,
						image: response.data.image,
						readyInMinutes: response.data.readyInMinutes,
						summary: response.data.summary,
						analyzedInstructions: response.data.analyzedInstructions[0].steps,
					});
				}
			})

			.catch(err => console.log(err));
	}, [id]);

	return (
		<div>
			<div className='recipe-container'>
				<div>
					<img className='recipe-image' alt='recipeImage' src={data.image} />
				</div>

				<h1 className='recipe-title'>{data.title}</h1>

				<p id='recipe-summary'>{parse(data.summary)}</p>
			</div>

			<div>
				{data.analyzedInstructions?.map(step => (
					<div key={step.number}>
						<p>{step.number}</p>
						<p>{step.step}</p>
					</div>
				))}
			</div>

			<div className='back'>
				<Link to='/search'>SeachPage</Link>
			</div>
		</div>
	);
};
export default CardView;

export const CardWrapper = styled.div`
	display: flex;
	width: 75vw;
	align-items: right;
	flex-wrap: nowrap;
	margin: auto;
`;

export const ViewImage = styled.div``;

export const ViewInfo = styled.div``;

export const ViewTitle = styled.div``;
