import globalStyles from "../styles/global";
import { Global } from "@emotion/core";
import React from "react";
import clsx from "clsx";
import { useTheme } from "../utils/Theme";
import stylesFn from "../styles/home";
import Head from "next/head";

export default () => {
  const { theme } = useTheme();
  const styles = stylesFn(theme);
  return (
    <>
      <Head>
        <title>words-aas</title>
        <meta name="theme-color" content={theme.tabColor} />
      </Head>
      <Global styles={globalStyles} />
      <div className={clsx(...styles.wrapper)}>
        <div className={clsx(...styles.content)}>
          <div className={clsx(...styles.inner)}>
            <h1 className={clsx(...styles.title)}>
              <span className={clsx(...styles.highlight)}>Words</span> as a Service
            </h1>
            <p className={clsx(...styles.subtitle)}>A simple API to generate unique randomized words & phrases.</p>
            <div className={clsx(...styles.buttons)}>
              <div className={"inline-block"}>
                <a href={"https://github.com/chroline/words-aas"} className={clsx(...styles.mainBtn)}>
                  View on GitHub
                </a>
              </div>
              <div className={"mt-3 sm:mt-0 sm:ml-3 inline-block"}>
                <a
                  href={"https://github.com/chroline/words-aas/releases/tag/word-files"}
                  className={clsx(...styles.altBtn)}
                >
                  Download Files
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className={clsx(...styles.credits)}>made with ❤️ by Cole Gawin</p>
      </div>
    </>
  );
};
