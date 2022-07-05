import CardContainer from "./CardContainer";
import ImageContainer from "./ImageContainer";
import GreekMeatballs from "../../assets/imgs/GreekMeatballs.jpeg";
import CardContent from "./CardContent";
import LongText from "../LongText/LongText";
import CardButton from "./CardButton";

function Card() {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={GreekMeatballs} alt="" />
      </ImageContainer>
      <CardContent>
        <h3> Greek Meatballs </h3>

        <LongText
          content={`These juicy Greek Meatballs rock! A traditional recipe, beautifully flavoured with red
					onion, fresh parsley, a touch of mint and hint of dried oregano. These meatballs are
					slightly crisp on the outside and are brilliant served as an appetiser with tzatiki and
					pita bread as part of a mezze spread (very Greek!), or as a meal with a salad.`}
          limit={100}
        ></LongText>
      </CardContent>
      <CardButton>See Recipe</CardButton>
    </CardContainer>
  );
}

export default Card;
