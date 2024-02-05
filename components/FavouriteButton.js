import styled from "styled-components";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export default function FavouriteButton({ isFavorite, toggleFavorite }) {
  return (
    <StyledButton onClick={toggleFavorite}>
      {isFavorite ? <FaBookmark /> : <FaRegBookmark />}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  background: #fafafa;
  padding: 10px;
  border-radius: 15px;
  position: absolute;
  right: 3%;
  top: 3%;
  display: flex;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);

  svg {
    cursor: pointer;
    font-size: 20px;
    color: #e27704;
  }
`;
