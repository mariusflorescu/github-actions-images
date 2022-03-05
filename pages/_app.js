import { global } from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  global();

  return <Component {...pageProps} />;
}

export default MyApp;
