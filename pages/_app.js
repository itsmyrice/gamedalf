import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <>
    <SWRConfig
      value={{ fetcher }}>
      <GlobalStyle />
      <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
