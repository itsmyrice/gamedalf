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
}) {
  const [visibleCount, setVisibleCount] = useState(listLength);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <GamesContainer>
      <Title>{data[0].categories[categorieId]}</Title>
      <Swiper
        style={{ "--swiper-navigation-size": "30px" }}
        spaceBetween={15}
        slidesPerView={1.1}
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
            />
          </SwiperSlide>
        ))}
        {visibleCount < data.length && (
          <SwiperSlide style={{ height: "100%" }}>
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
  width: 100%;
  box-sizing: border-box;
  margin: 40px 0;
`;

const ShowMore = styled.button`
  display: flex;
  height: 100%;
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
  font-size: 20px;
  margin-bottom: 10px;
  color: gray;
`;
