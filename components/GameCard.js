import styled from "styled-components";
import Link from "next/link";
import FavouriteButton from "./FavouriteButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default function GameCard({
  game,
  isFavorite,
  toggleFavorite,
  showModal,
}) {
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
        <StyledTitle>{game.name}</StyledTitle>
        {!game.userCreated && (
        <StyledRankTitle>{game.rating.slice(0, 3)}</StyledRankTitle>
        )}
        <StyledYearDisplay>{game.yearpublished}</StyledYearDisplay>
      </StyledLink>
      {game.userCreated && (
        <>
          <EditButton showModal={showModal} onClick={() => showModal.toggle('edit',game)}/>
          <DeleteButton id={game._id} />
        </>
      )}
    </StyledCard>
  );
}
const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`;
const StyledRankTitle = styled.p`
  color: #ff8200;
  margin: 0;
`;

const StyledCard = styled.div`
  border: 1px ridge black;
  box-shadow: 0px 2px 6px #b56917;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledTitle = styled.h2`
  color: white;
  font-size: 1.5em;
  margin: 0.5em 0;
  text-decoration: und;
`;

const StyledYearDisplay = styled.p`
  color: #ccccff;
  margin: 0;
`;

const StyledImageDisplay = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;
