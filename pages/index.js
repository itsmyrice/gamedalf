import useSWR from "swr";
import HorizontalGameList from "@/components/HorizontalGameList";
import styled from "styled-components";
import Login from "components/Login.js";
import { useSession } from "next-auth/react";
import Footer from "@/components/Footer";

export default function HomePage({ isFavorite, toggleFavorite, showModal }) {
  const { data, error, isLoading } = useSWR("/api/games");

  if (error)
    return (
      <small>
        "Sorry, we couldn't retrieve the game data at the moment. Please try
        again later."
      </small>
    );

  if (!data || isLoading) return <small>loading...</small>;

  return (
    <>
      <Login />

      {data && (
        <>
          <HorizontalGameList
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
            data={data.slice(0, 25)}
            categorieId={0}
            listLength={5}
            showModal={showModal}
          />
          <HorizontalGameList
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
            data={data.slice(26, 50)}
            categorieId={1}
            listLength={5}
            showModal={showModal}
          />
          <HorizontalGameList
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
            data={data.slice(51, 75)}
            categorieId={2}
            listLength={5}
            showModal={showModal}
          />
        </>
      )}
      <Footer />
    </>
  );
}