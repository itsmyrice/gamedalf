import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import styled from "styled-components";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { useState } from "react";
import FormModal from "@/components/FormModal";
export default function App({ Component, pageProps }) {
  const [localGameData, setLocalGameData] = useState([]);
  const [modal, setModal] = useState({
    isVisible: false,
    isEdit: false,
    game: null,
  });

  function toggleShowModal(string, game) {
    string === "edit"
      ? setModal({ isVisible: !modal.isVisible, isEdit: true, game: game })
      : string === "create"
      ? setModal({ isVisible: !modal.isVisible, isEdit: false })
      : null;
  }

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
            showModal={{ toggle: toggleShowModal, modal: modal }}
            {...pageProps}
          />

          {modal.isVisible && (
            <FormModal showModal={{ toggle: toggleShowModal, modal: modal }} />
          )}
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
