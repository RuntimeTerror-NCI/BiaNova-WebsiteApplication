import styled from "styled-components";

const SearchBarStyled = styled.form`
  display: flex;
  justify-content: center;
  margin: 2rem;
`;

const Input = styled.input`
  width: 60%;
  height: 3rem;
  outline: none;
  border-radius: 0.2rem;
  border: none;
  padding-left: 1rem;
  &::placeholder {
    font-family: "Montserrat", sans-serif;
  }
`;

const Button = styled.button`
  background-color: transparent;
  transition: background 0.2s ease-in-out;
  border: 0 transparent;
  margin-left: -4rem;
  width: 4rem;
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  cursor: pointer;
  font-size: 1.7rem;
  &:hover {
    background: #34a2fc;
  }
`;

function SearchBar() {
  return (
    <div>
      <SearchBarStyled action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden"></span>
        </label>
        <Input type="text" placeholder="Search Recipes" />
        <Button type="submit">&#127859;</Button>
      </SearchBarStyled>
    </div>
  );
}

export default SearchBar;