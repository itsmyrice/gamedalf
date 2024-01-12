import "../global.css" 
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig
        value={{ fetcher: (resource, init) => fetch(resource, init).then(response => response.json())}}
      >
        <Component {...pageProps}/>
      </SWRConfig>
    </>
  );
}
