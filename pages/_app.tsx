import "typeface-inter";
import "typeface-crimson-pro";
import "../util/base.css";

import { AppProps } from "next/app";
import ThemeProvider from "../components/Theme";
import DayNight from "../components/daynight";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <DayNight size={36} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
