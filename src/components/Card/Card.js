import CardContainer from './CardContainer';
import ImageContainer from './ImageContainer';
import CardContent from './CardContent';
import LongText from '../LongText/LongText';

function Card({ img, title, content }) {
	return (
		<CardContainer>
			<ImageContainer>
				<img src={img} alt='' />
			</ImageContainer>
			<CardContent>
				<h3>{title} </h3>
				<LongText content={content} limit={100}></LongText>
			</CardContent>
		</CardContainer>
	);
}

export default Card;
