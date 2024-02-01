import styled from "styled-components";
import Link from "next/link";
import FavouriteButton from "./FavouriteButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { MdArrowOutward } from "react-icons/md";
import { FaRegStar, FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";

export default function GameCard({
  game,
  isFavorite,
  toggleFavorite,
  showModal,
}) {
  return (
    <StyledCard>
      <StyledImageDiv>
        <StyledImage src={game.image} width={100} height={200}></StyledImage>
        <FavouriteButton
          isFavorite={isFavorite(game._id)}
          toggleFavorite={() => toggleFavorite(game._id)}
        />
        <StyledWrapperShorts>
          <StyledRankTitle>
            <FaRegStar /> {game.rating}
          </StyledRankTitle>
          <StyledYear>
            <FaRegCalendarAlt />
            {game.yearpublished}
          </StyledYear>
        </StyledWrapperShorts>
      </StyledImageDiv>
      <StyledLink href={`/games/${game._id}`} aria-label="More details">
        <StyledContentWrapper>
          <StyledTitle>{game.name}</StyledTitle>
          <StyledDesc>{`${game.description.slice(0, 50)}...`}</StyledDesc>
        </StyledContentWrapper>
        <MdArrowOutward
          style={{
            fontSize: "30px",
            color: "black",
            position: "absolute",
            bottom: "10px",
            right: "10px",
          }}
        />
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

const StyledCard = styled.div`
  border-radius: 20px;
`;

const StyledImageDiv = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  position: relative;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
`;

const StyledWrapperShorts = styled.div`
  display: flex;
  gap: 6px;
  position: absolute;
  bottom: 3%;
  left: 3%;
`;

const StyledRankTitle = styled.p`
  color: black;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: #fafafa;
  padding: 10px;
  border-radius: 20px;
`;
const StyledYear = styled.p`
  color: black;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: #fafafa;
  padding: 10px;
  border-radius: 20px;
`;
const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  background: #fafafa;
  border-radius: 0px 0px 20px 20px;
`;

const StyledContentWrapper = styled.div`
  width: 95%;
  margin: auto;
  padding: 5% 0;
`;

const StyledTitle = styled.h2`
  color: black;
  font-size: 20px;
  font-weight: 400;
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

const StyledDesc = styled.p`
  color: #5c5c5c;
  text-decoration: underline;
  font-size: 14px;
  font-weight: 300;
  width: 90%;
  margin: auto;
`;
