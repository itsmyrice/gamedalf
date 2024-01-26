import styled from "styled-components";
import { MdOutlineFolderOff } from "react-icons/md";
import useSWR from "swr";
import VerticalGameList from "@/components/VerticalGameList";

export default function ProfilePage({ toggleFavorite, isFavorite, showModal }) {
  const { data: gameData, isLoading, error  } = useSWR("/api/games");

  const userCreatedGame = gameData
    ? gameData.filter(({ userCreated }) => userCreated)
    : [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load games</div>;

  return (
    <StyledSection>
      <StyledDivBigText>
        <h2>Profile</h2>
        <h3>Your games:</h3>
      </StyledDivBigText>
      <StyledButton onClick={() => showModal.toggle("create")}>Create</StyledButton>

      <StyledUserCreatedGameList>
        {userCreatedGame.length > 0 ? (
          <VerticalGameList
            data={userCreatedGame}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
            showModal={showModal}
          />
        ) : (
          <p>
            <MdOutlineFolderOff /> No games yet.
          </p>
        )}
      </StyledUserCreatedGameList>
    </StyledSection>
  );
}

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding-top: 2rem;
  color: #111111;
  height: 100vh;
`;

const StyledDivBigText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding-left: 2rem;
`;

const StyledUserCreatedGameList = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: underline;
  padding: 3.5rem 0;
`;

const StyledModal = styled.div`
  background-color: #f5f5f7;
  width: 90%;
  height: 80%;
  color: black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 900;
`;

const StyledButton = styled.button`
  display: inline-flex;
  padding: 10px;
  margin: auto;
  background-color: white;
  color: black;
  border: none;
  font-size: 24px;
  transition: 0.3s ease-in-out;

  cursor: pointer;
  &:hover {
    background: transparent;
    border: 1px solid black;
    transition: 0.3s ease-in-out;
  }
`;
