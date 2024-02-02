import styled from "styled-components";
import { MdOutlineFolderOff } from "react-icons/md";
import useSWR from "swr";
import VerticalGameList from "@/components/VerticalGameList";
import { IoCreateOutline } from "react-icons/io5";
import { StyledSection } from "../../styles";
import { AiOutlineUser } from "react-icons/ai";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import Image from "next/image";

export default function ProfilePage({ toggleFavorite, isFavorite, showModal }) {
  const { data: gameData, isLoading, error } = useSWR("/api/games");

  const session = useSession();

  if (session.status === "unauthenticated") {
    return (
      <StyledSection>
        <h2>Please sign in to see your profile.</h2>
        <Login />
      </StyledSection>
    );
  }

  if (isLoading || session.status === "loading") return <div>Loading...</div>;
  if (error) return <div>Failed to load games</div>;

  const userCreatedGame =
    session.status === "authenticated" && gameData
      ? gameData.filter(
          ({ user }) => user && user.email === session.data.user.email
        )
      : [];

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
        <Image src={session.data.user.image} alt="" width={100} height={100} />
        <h3>{session.data.user.name}</h3>
        <Login />
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
  flex-direction: column;
  row-gap: 2rem;
  padding-top: 2rem;
  color: #111111;
  height: 100vh;
`;

const StyledUserCreatedGameList = styled.div`
  display: flex;
  flex-direction: column;
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
