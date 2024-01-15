import "../global.css";
import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((response) => response.json()),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
