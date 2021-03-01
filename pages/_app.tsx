import "typeface-inter";
import "typeface-crimson-pro";
import "../styles/tailwind.css";

import { AppProps } from "next/app";
import ThemeProvider from "../utils/Theme";
import DayNight from "../components/daynight";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={"absolute top-0 right-0 m-5"}>
        <DayNight size={36} />
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
