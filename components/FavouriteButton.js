import { useState } from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function FavouriteButton() {
    const [ isFavorite, setIsFavorite ] = useState(false)

    function toggleFavorite() {
        setIsFavorite(!isFavorite);
    };

    return (   
        <StyledButton onClick={toggleFavorite}> 
        {isFavorite ? <FaHeart/> : <FaRegHeart/>}
        </StyledButton>
    )
}

const StyledButton = styled.button`
 border: none;
 background-color: transparent;
 svg {
    cursor: pointer;
    font-size: 2rem;
    color: #e27704;
 }
`;
