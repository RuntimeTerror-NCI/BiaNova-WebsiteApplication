import "./BadgeBanner.css";
import BadgeHeader from "./BadgeHeader";

import favorite from "../../assets/imgs/badges/icons8-favorite-100.png";
import ingredients from "../../assets/imgs/badges/icons8-ingredients-100.png";
import search from "../../assets/imgs/badges/icons8-search-100.png";

const BADGES = [
  {
    id: 1,
    image: ingredients,
    heading: <h2> Ingredients </h2>,
    text: (
      <p>
        {" "}
        Simply Input your Ingredients into the Field Below and Get Started
        Looking up your Recipes!
      </p>
    ),
  },

  {
    id: 2,
    image: favorite,
    heading: <h2> Favorites </h2>,
    text: (
      <p> Save Your Favorite Meals, Click the Heart Icon Beside Each Recipe!</p>
    ),
  },

  {
    id: 3,
    image: search,
    heading: <h2> Search </h2>,
    text: (
      <p>
        {" "}
        Search for any Recipe, specify by Allergens, or by any ingredient, we
        have it all!{" "}
      </p>
    ),
  },
];

function BadgeBanner() {
  return (
    <div className="banner-container">
      <BadgeHeader />
      <div className="bottom-container">
        {BADGES.map((item) => (
          <div key={item.id} className="badge-container">
            <img src={item.image} className="badge-icon" alt="" />
            <div className="badge-text">
              <h2 className="badge-header"> {item.heading} </h2>
              <p className="badge-paragraph"> {item.text} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BadgeBanner;
