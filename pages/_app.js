import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { useState } from "react";
export default function App({ Component, pageProps }) {
  const [localGameData, setLocalGameData] = useState([]);

  function checkIsFavorite(id) {
    const foundGame = localGameData.find((item) => item.id === id);
   
    if (!foundGame) {
      console.log("nothing")
      return false;
    }

    console.log("🚀  foundGame:", foundGame);
    return foundGame.isFavorite;
  }

  function toggleFavorite(id) {
    const localData = localGameData.find((item) => item.id === id);
    console.log('localData first:', localData)
    if (!localData) {
      const newLocalData = {
        id,
        isFavorite: true,
      };
      console.log("newLocalData:",newLocalData)
      setLocalGameData([...localGameData, newLocalData]);
    } else {
      const updatedLocalGameData = localGameData.map((item) => {
        if (item.id === id) {
          console.log( "updatedLocalData item",item)
          return {
            ...item,
            isFavorite: !item.isFavorite,
          };
        } else {
          console.log("updatedLocalData item 2",item)
          return item;
        }
        
      });
      setLocalGameData(updatedLocalGameData);

      console.log("🚀  updatedLocalGameData:", updatedLocalGameData);
      return;
    }
  }

  return (
    <>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((response) => response.json()),
        }}
      >
        <Header />
        <Navbar />
        <GlobalStyle />
        <Component
          isFavorite={checkIsFavorite}
          toggleFavorite={toggleFavorite}
          {...pageProps}
        />
      </SWRConfig>
    </>
  );
}
