import React, { useState } from "react";
import styled from "styled-components";
import GameCard from "./GameCard";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { GoPlus } from "react-icons/go";

export default function GameList({ data }) {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <GamesContainer>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        navigation
        modules={[Navigation]}
      >
        {data.slice(0, visibleCount).map((game) => (
          <SwiperSlide key={game.id}>
            <GameCard game={game} />
          </SwiperSlide>
        ))}
        {visibleCount < data.length && (
          <SwiperSlide>
            <ShowMore onClick={handleSeeMore}>
              See More
              <GoPlus />
            </ShowMore>
          </SwiperSlide>
        )}
      </Swiper>
    </GamesContainer>
  );
}

const GamesContainer = styled.section`
  min-height: 100vh;
  background-color: #5a4fcf;
  color: #ffffff;
  margin: auto;
  padding: 80px 0px;
  width: 100vw;
`;

const ShowMore = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: transparent;
  color: black;
  font-size: 60px;
  border-radius: 0.75rem;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    transition: 0.3s;
  }
`;
