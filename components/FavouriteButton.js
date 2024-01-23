import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function FavouriteButton({ isFavorite, toggleFavorite }) {
  return (
    <StyledButton onClick={toggleFavorite}>
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 5%;
  top: 5%;

  svg {
    cursor: pointer;
    font-size: 2rem;
    color: #e27704;
  }
`;
