"use client";
import { useState } from "react";
import styled from "styled-components";
import GameCard from "./GameCard";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { GoPlus } from "react-icons/go";

export default function HorizontalGameList({
  data,
  categorieId,
  isFavorite,
  toggleFavorite,
  listLength
}) {
  const [visibleCount, setVisibleCount] = useState(listLength);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <GamesContainer>
      <Title>{data[0].categories[categorieId]}</Title>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        navigation
        modules={[Navigation]}
      >
        {data.slice(0, visibleCount).map((game) => (
          <SwiperSlide key={game._id}>
            <GameCard
              game={game}
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite}
            />
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

const GamesContainer = styled.div`
  color: #ffffff;
  padding: 80px 0px;
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

const Title = styled.h2`
  font-size: 40px;
  margin-left: 5%;
  margin-bottom: 20px;
  border-bottom: 2px solid #fff;
  display: inline-block;
`;
