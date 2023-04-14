import Background from "@/components/Background/Background";
import Nav from "@/components/Nav/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { store } from "../store/Store";
import { Provider } from "react-redux";

// App:
// combines all components into a single page
// we have Navbar, Background, Provider, and Head wrapping around all components.
export default function App({ Component, pageProps }: AppProps) {
  const main = (
    // @ts-ignore
    <Background>
      <Component {...pageProps} />
    </Background>
  );
  return (
    <Provider store={store}>
      <Head>
        <title>David Serrano</title>
      </Head>
      <Nav />
      {main}
    </Provider>
  );
}
