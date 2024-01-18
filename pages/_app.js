import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
export default function App({ Component, pageProps }) {
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
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
