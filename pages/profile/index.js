import styled from "styled-components";
import { MdOutlineFolderOff } from "react-icons/md";
import useSWR from "swr";
import VerticalGameList from "@/components/VerticalGameList";
import { IoCreateOutline } from "react-icons/io5";
import { StyledSection } from "../../styles";
import { AiOutlineUser } from "react-icons/ai";

export default function ProfilePage({ toggleFavorite, isFavorite, showModal }) {
  const { data: gameData, isLoading, error } = useSWR("/api/games");

  const userCreatedGame = gameData
    ? gameData.filter(({ userCreated }) => userCreated)
    : [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load games</div>;

  return (
    <StyledSection>
      <StyledTitle>
        <AiOutlineUser />
        Profile
      </StyledTitle>
      <StyledButton onClick={() => showModal.toggle("create")}>
        <IoCreateOutline />
        Create
      </StyledButton>
      <StyledUserCreatedGameList>
        {userCreatedGame.length > 0 ? (
          <VerticalGameList
            data={userCreatedGame}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
            showModal={showModal}
          />
        ) : (
          <StyledText>
            <MdOutlineFolderOff /> No games yet.
          </StyledText>
        )}
      </StyledUserCreatedGameList>
    </StyledSection>
  );
}

const StyledTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 400;
  margin-bottom: 40px;
`;
const StyledText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: auto;
`;

const StyledUserCreatedGameList = styled.div``;

const StyledButton = styled.button`
  display: flex;
  margin: auto;
  margin-bottom: 40px;
  padding: 20px;
  justify-content: center;
  border: 1px solid white;
  background: radial-gradient(circle, #f5f7fa 0%, #c3cfe2 100%);
  color: black;
  font-size: 30px;
  border-radius: 20px;
  cursor: pointer;
`;
