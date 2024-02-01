import styled from "styled-components";
import { MdOutlineFolderOff } from "react-icons/md";
import useSWR from "swr";
import VerticalGameList from "@/components/VerticalGameList";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import Image from "next/image";

export default function ProfilePage({ toggleFavorite, isFavorite, showModal }) {
  const { data: gameData, isLoading, error } = useSWR("/api/games");

  const session = useSession();

  const userCreatedGame = gameData
    ? gameData.filter(({ userCreated }) => userCreated)
    : [];

  if (session.status !== "authenticated") {
    return (
      <StyledSection>
        <h2>Please sign in to see your profile.</h2>
        <Login />
      </StyledSection>
    );
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load games</div>;

  return (
    <StyledSection>
      <StyledDivBigText>
        <h2>Profile</h2>

        <Image src={session.data.user.image} alt="" width={100} height={100} />
        <h3>{session.data.user.name}</h3>
        <Login />
        <h3>Your games:</h3>
      </StyledDivBigText>
      <StyledButton onClick={() => showModal.toggle("create")}>
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
  align-items: center;
  text-decoration: underline;
  padding: 3.5rem 0;
  margin-bottom: 4rem;
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
