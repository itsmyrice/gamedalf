import useSWR from "swr";
import HorizontalGameList from "@/components/HorizontalGameList";
import Link from "next/link";
import styled from "styled-components";
import Login from "components/Login.js";

import { useSession } from "next-auth/react";

export default function HomePage({ isFavorite, toggleFavorite, showModal }) {
  const { data, error, isLoading } = useSWR("/api/games");

  const session = useSession();
  const isLoggedIn = session.status === "authenticated";

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
      <StyledLink href={"/aboutus"}>About us</StyledLink>
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
    </>
  );
}

const StyledLink = styled(Link)`
  color: #111111;
  padding: 0.3rem;
  margin-left: 1.2rem;
  &:hover {
    color: #ff8200;
    border-left: 1px solid #111111;
  }
`;
