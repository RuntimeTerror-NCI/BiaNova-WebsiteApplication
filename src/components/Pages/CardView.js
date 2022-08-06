import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";
import { LandingLink } from "../../UI/StyledForm";
import { devices } from "../../mediaQueries/devices";

const CardView = () => {
  const [data, setData] = useState({
    title: "",
    image: "",
    readyInMinutes: "",
    summary: "",
    analyzedInstructions: [],
    servings: "",
    sourceUrl: "",
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://bianova.herokuapp.com/externalApiId/${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers":
            "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Allow-Origin, Access-Control-Request-Headers",
        },
      })
      .then((response) => {
        console.log(response);

        if (response.data.analyzedInstructions[0] === undefined) {
          setData({
            title: response.data.title,
            image: response.data.image,
            readyInMinutes: response.data.readyInMinutes,
            summary: response.data.summary,
            servings: response.data.servings,
            sourceUrl: response.data.sourceUrl,
          });
        } else if (response.data.analyzedInstructions[0].steps) {
          setData({
            title: response.data.title,
            image: response.data.image,
            readyInMinutes: response.data.readyInMinutes,
            summary: response.data.summary,
            analyzedInstructions: response.data.analyzedInstructions[0].steps,
            servings: response.data.servings,
            sourceUrl: response.data.sourceUrl,
          });
        }
      })

      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Wrapper>
      <CardHeader>
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
          {data.sourceUrl ? (
            <pLink>
              {" "}
              <a href={data.sourceUrl}> {data.sourceUrl}</a>
            </pLink>
          ) : null}
        </Summary>
      </CardHeader>

      <div>
        {data.analyzedInstructions ? <h1>Instructions</h1> : null}
        {data.analyzedInstructions?.map((step) => (
          <div key={step.number}>
            <p>
              {step.number}: {step.step}
            </p>
          </div>
        ))}
      </div>

      <LandingLink to="/">Back</LandingLink>
    </Wrapper>
  );
};
export default CardView;

export const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 80vw;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
  flex: 1 0 auto;
  align-items: center;

  h1 {
    font-size: 3rem;
    letter-spacing: 0.1rem;
  }

  p {
    width: 90%;
    margin: auto;
    font-size: 1.3rem;
    line-height: 1.5rem;
    margin-top: 2rem;
    letter-spacing: 0.1rem;
    padding-bottom: 1rem;
  }

  @media ${devices.tablet} {
    h1 {
      font-size: 2.5rem;
      letter-spacing: 0.1rem;
    }

    p {
      margin: auto;
      font-size: 1.1rem;
      line-height: 1.3rem;
      margin-top: 1.7rem;
      letter-spacing: 0.1rem;
      font-weight: 500;
    }
  }

  @media ${devices.mobileL} {
    text-align: center;

    h1 {
      font-size: 1.8rem;
      letter-spacing: 0.2rem;
    }

    p {
      font-size: 0.8rem;
      line-height: 1.3rem;
      letter-spacing: 0.1rem;
      font-weight: 500;
      margin: auto;
    }
  }

  @media ${devices.mobileL} {
    text-align: center;

    h1 {
      font-size: 1.8rem;
      letter-spacing: 0.2rem;
    }

    p {
      font-size: 0.7rem;
      line-height: 2rem;
      letter-spacing: 0.1rem;
      font-weight: 500;
      margin: auto;
    }
  }
`;

const CardHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  @media ${devices.tablet} {
    align-items: center;
    justify-content: center;
  }
`;

const Header = styled.div`
  display: flex;
  background-color: white;
  border-radius: 0.2rem;
  margin: 0;
  flex-direction: column;

  @media ${devices.laptop} {
    flex-direction: column;
    max-width: 90%;
  }

  @media ${devices.tablet} {
    align-items: center;
    justify-content: center;
  }

  @media ${devices.mobileL} {
    width: 100%;
  }
`;

const Summary = styled.div``;

export const ViewImage = styled.img`
  max-width: 30rem;
  border-bottom-left-radius: 0.2rem;
  border-top-left-radius: 0.2rem;

  @media ${devices.laptop} {
    border-top-right-radius: 0.2rem;
  }

  @media ${devices.tablet} {
    width: 100%;
  }
`;

export const ViewInfo = styled.div`
  margin-left: 2rem;

  @media ${devices.laptop} {
    margin-left: 0;
  }

  @media ${devices.mobileL} {
    font-size: 1rem;
  }
`;

export const ViewTitle = styled.div``;
