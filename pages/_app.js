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
    isSubmit: false,
    game: null,
  });

  function toggleShowModal(action, game) {
    if (action === "edit") {
      setModal({
        isVisible: true,
        isEdit: true,
        game: game,
        isSubmit: false,
      });
      return;
    }
  
    if (action === "create") {
      setModal({
        isVisible: true,
        isEdit: false,
        isSubmit: false,
        game: null,
      });
      return;
    }
  
    if (action === "submit") {
      setModal({
        isVisible: true,
        isEdit: modal.isEdit,
        isSubmit: true,
        game: null,
      });
      return;
    }
  
    if (action === "close") {
      setModal({
        isVisible: false,
        isEdit: false,
        isSubmit: false,
        game: null,
      });
      return;
    }
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
