import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import axios from "axios";

function Favorites({ user, token }) {
  const [recipesLiked, setRecipesLiked] = useState();

  const getRecipesLiked = () => {
    // console.log('running getRecipesLiked');
    let url = "https://bianova.herokuapp.com/profile";

    let headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(url, {
        params: {
          username: user,
        },
        headers: headers,
      })
      .then((response) => {
        for (let rec in response.data["savedRecipes"]) {
          console.log(rec);
        }
        let savedRecipes = response.data["savedRecipesObjects"];
        console.log(response.data["savedRecipesObjects"]);
        setRecipesLiked(savedRecipes);
        // console.log(...response.data['savedRecipes']);
        // console.log(savedRecipes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRecipesLiked();
  }, []);

  return (
    <FavContainer>
      {recipesLiked?.map(({ title, id, img }) => (
        <div key={id}>
          <Card
            id={id}
            title={title}
            img={img}
            token={token}
            user={user}
          ></Card>
        </div>
      ))}
    </FavContainer>
  );
}

const FavContainer = styled.div`
  margin: 50px;
  padding: 0px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  flex-basis: calc(100% / 5);
`;
export default Favorites;
