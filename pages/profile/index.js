import styled from "styled-components";
import { MdOutlineFolderOff } from "react-icons/md";
import useSWR from "swr";
import VerticalGameList from "@/components/VerticalGameList";
import { IoCreateOutline } from "react-icons/io5";
import { StyledSection } from "../../styles";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import Image from "next/image";

export default function ProfilePage({ toggleFavorite, isFavorite, showModal }) {
  const { data: gameData, isLoading, error } = useSWR("/api/games");

  const session = useSession();

  if (session.status === "unauthenticated") {
    return (
      <LoginDiv>
        <StyledSignInText>Please sign in to see your profile.</StyledSignInText>
        <Login />
      </LoginDiv>
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
      <StyledWrapper>
        <StyledImage
          src={session.data.user.image}
          alt=""
          width={100}
          height={100}
        />
        <StyledName>{session.data.user.name}</StyledName>
      </StyledWrapper>
      <StyledUserCreatedGameList>
        <StyledButton onClick={() => showModal.toggle("create")}>
          <IoCreateOutline />
          Create
        </StyledButton>
        {userCreatedGame.length > 0 ? (
          <VerticalGameList
            data={userCreatedGame}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
            showModal={showModal}
          />
        ) : (
          <>
            <StyledText>
              <MdOutlineFolderOff /> No games yet.
            </StyledText>
          </>
        )}
      </StyledUserCreatedGameList>
    </StyledSection>
  );
}

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
`;

const StyledName = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
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
  font-size: 20px;
  border-radius: 20px;
  cursor: pointer;
`;

const StyledSignInText = styled.p`
  font-size: 20px;
  text-align: center;
`;
