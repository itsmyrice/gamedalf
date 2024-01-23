import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import styled from "styled-components";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { useState } from "react";
export default function App({ Component, pageProps }) {
  const [localGameData, setLocalGameData] = useState([]);

  function checkIsFavorite(id) {
    const foundGame = localGameData.find((item) => item.id === id);

    if (!foundGame) {
      return false;
    }

    return foundGame.isFavorite;
  }

  function toggleFavorite(id) {
    const localData = localGameData.find((item) => item.id === id);
    if (!localData) {
      const newLocalData = {
        id: id,
        isFavorite: true,
      };
      setLocalGameData([...localGameData, newLocalData]);
    } else {
      const updatedLocalGameData = localGameData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isFavorite: !item.isFavorite,
          };
        } else {
          return item;
        }
      });
      setLocalGameData(updatedLocalGameData);
    }
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((response) => response.json()),
        }}
      >
        <Header />
        <ContentWrapper>
          <Component
            isFavorite={checkIsFavorite}
            toggleFavorite={toggleFavorite}
            localGameData={localGameData}
            {...pageProps}
          />
        </ContentWrapper>
        <Navbar />
      </SWRConfig>
    </>
  );
}

const ContentWrapper = styled.section`
  max-width: 80ch;
  margin-inline: auto;
  padding-inline: 1rem;
`;
