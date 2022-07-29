import { useNavigate } from "react-router-dom";
import { PillButton } from "../../UI/Button.styles";
import styled from "styled-components";

function Dashboard({ user, token }) {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <DashboardCon>
      <h1>Hi there, {user} </h1>
      <PillButton onClick={() => logout()}>Logout</PillButton>
      <h2>Favourites</h2>
    </DashboardCon>
  );
}

const DashboardCon = styled.div`
  font-weight: 300;
  margin-right: 4vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 4rem;
    margin-top: 3rem;
    margin-bottom: 1.2rem;
    letter-spacing: 0.1rem;
    line-height: 4.5rem;
    text-align: center;
  }
`;

export default Dashboard;
