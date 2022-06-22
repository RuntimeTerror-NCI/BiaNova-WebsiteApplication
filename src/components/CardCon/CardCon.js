import "./CardCon.css";
import React from "react";
import GreekMeatballs from "../../assets/imgs/GreekMeatballs.jpeg";

function CardCon() {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={GreekMeatballs} alt="" />
      </div>

      <div className="card-content">
        <h3 className="card-title">Greek Meatballs</h3>

        <p className="card-body">
          These juicy Greek Meatballs rock! A traditional recipe, beautifully
          flavoured with red onion, fresh parsley, a touch of mint and hint of
          dried oregano. These meatballs are slightly crisp on the outside and
          are brilliant served as an appetiser with tzatiki and pita bread as
          part of a mezze spread (very Greek!), or as a meal with a salad.
        </p>
      </div>
      <button className="card-btn">See Recipe</button>
    </div>
  );
}

<article class="card">
  <a href="#">
    <div class="card__thumb">
      <img src={GreekMeatballs} alt="" />
    </div>
    <div class="card__content">
      <h3 class="card__title">Cinnamon Rolls</h3>
      <p class="card__author">Chef Ahmad</p>
      <div class="card__rating">
        <span>4.9</span>
      </div>
    </div>
  </a>
</article>;

export default CardCon;
