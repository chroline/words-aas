import "typeface-inter";
import "typeface-crimson-pro";
import "../util/base.css";

import { AppProps } from "next/app";
import ThemeProvider from "../components/Theme";
import DayNight from "../components/daynight";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>words-aas</title>
        <script defer data-domain="words-aas.vercel.app" src="https://plausible.io/js/plausible.js" />
      </Head>
      <ThemeProvider>
        <DayNight size={36} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
