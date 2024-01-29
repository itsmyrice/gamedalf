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
  listLength,
  showModal,
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
        slidesPerView={1.5}
        navigation
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {data.slice(0, visibleCount).map((game) => (
          <SwiperSlide key={game._id}>
            <GameCard
              game={game}
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite}
              showModal={showModal}
            />
          </SwiperSlide>
        ))}
        {visibleCount < data.length && (
          <SwiperSlide>
            <ShowMore onClick={handleSeeMore}>
              <GoPlus />
              See More
            </ShowMore>
          </SwiperSlide>
        )}
      </Swiper>
    </GamesContainer>
  );
}

const GamesContainer = styled.div`
  color: #ffffff;
  margin: auto;
  padding: 40px 20px;
  width: 100%;
  box-sizing: border-box;
`;

const ShowMore = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: black;
  color: white;
  font-size: 24px;
  border-radius: 0.75rem;
  cursor: pointer;
  padding: 10px 20px;
  transition: background-color 0.3s, box-shadow 0.3s;
  svg {
    margin-right: 10px;
  }
  &:hover {
    background-color: #333;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
  }
`;

const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 40px;
  border-bottom: 2px solid #fff;
  display: inline-block;
`;
