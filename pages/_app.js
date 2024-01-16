
import { SWRConfig } from "swr";
import GlobalStyle from "../styles.js"


import { SWRConfig } from "swr";
export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((response) => response.json()),
        }}
      >
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
