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
      <Title>{categorieId}</Title>
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
              showModal={showModal}
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
  width: 95%;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 0px;
  font-weight: 500;
  color: black;
  display: inline-block;
`;
const ShowMore = styled.button`
  display: flex;
  height: 210px;
  width: 335px;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background: radial-gradient(circle, #f5f7fa 0%, #c3cfe2 100%);
  color: black;
  font-size: 30px;
  border-radius: 20px;
  cursor: pointer;
`;
