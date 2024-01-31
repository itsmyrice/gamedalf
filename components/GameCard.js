import styled from "styled-components";
import Link from "next/link";
import FavouriteButton from "./FavouriteButton";
import DeleteButton from "./DeleteButton";
import { MdArrowOutward } from "react-icons/md";

export default function GameCard({ game, isFavorite, toggleFavorite }) {
  return (
    <StyledCard>
      <StyledImageWrapper>
        <StyledImageDisplay src={game.image} alt={game.name} />
        <FavouriteButton
          isFavorite={isFavorite(game._id)}
          toggleFavorite={() => toggleFavorite(game._id)}
        />
      </StyledImageWrapper>
      <StyledLink href={`/games/${game._id}`} aria-label="More details">
        <StyledWrapper>
          <StyledTitle>{game.name}</StyledTitle>
          <StyledRankTitle>Rating: {game.rating}</StyledRankTitle>
          <StyledYearDisplay>Release: {game.yearpublished}</StyledYearDisplay>
        </StyledWrapper>
        <MdArrowOutward
          style={{
            fontSize: "30px",
            color: "black",
            position: "absolute",
            bottom: "10px",
            right: "10px",
          }}
        />
      </StyledLink>
      {game.userCreated && <DeleteButton id={game._id} />}
    </StyledCard>
  );
}
const StyledLink = styled(Link)`
  cursor: pointer;
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const StyledRankTitle = styled.p`
  color: #ff8200;
  font-size: 14px;
`;

const StyledCard = styled.div`
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledTitle = styled.h2`
  color: black;
  font-size: 20px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const StyledYearDisplay = styled.p`
  color: black;
  font-size: 14px;
`;

const StyledImageDisplay = styled.img`
  width: 100%;
  height: 210px;
  object-fit: cover;
  border-radius: 20px;
`;

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledWrapper = styled.div`
  position: relative;
  width: 90%;
`;
