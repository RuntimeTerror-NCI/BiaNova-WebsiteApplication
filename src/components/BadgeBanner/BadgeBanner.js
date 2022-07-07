import BadgeContainer from './BadgeContainer';
import BadgeHeader from './BadgeHeader';
import { BannerContainer, BottomContainer } from './BannerContainer';

function BadgeBanner() {
	return (
		<BannerContainer>
			<BadgeHeader />
			<BottomContainer>
				<BadgeContainer />
			</BottomContainer>
		</BannerContainer>
	);
}

export default BadgeBanner;
