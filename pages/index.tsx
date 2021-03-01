import globalStyles from "../styles/global";
import { Global } from "@emotion/react";
import React from "react";
import clsx from "clsx";
import { useTheme } from "../utils/Theme";
import Head from "next/head";
import { Theme } from "../styles/colors";

const stylesFn = (theme: Theme) => ({
  wrapper: ["w-full h-full", `bg-${theme.background}`, "flex flex-col items-center justify-center"],
  content: ["w-full h-full", "flex items-center justify-center", "px-6"],
  inner: ["inline-block", "text-center"],
  title: ["font-serif font-bold italic", `text-6xl text-${theme.main} leading-none`, "mb-6"],
  highlight: [`text-${theme.highlight.main}`, "not-italic"],
  subtitle: [`text-${theme.subtitle} text-xl leading-relaxed`],
  buttons: ["mt-8", "flex flex-col sm:flex-row justify-center justify-start"],
  mainBtn: [
    "inline-block",
    "text-white text-base leading-6 font-medium",
    `bg-${theme.highlight.main} hover:bg-${theme.highlight.hover} focus:bg-${theme.highlight.hover}`,
    "shadow hover:shadow-md active:shadow-xl",
    "focus:outline-none",
    "transition-all duration-300",
    "border border-transparent rounded-md",
    "px-6 py-3",
  ],
  altBtn: [
    "inline-block",
    `bg-none hover:bg-${theme.altBtn.hover}`,
    "px-6 py-3",
    "focus:outline-none",
    "transition-all duration-300",
    `border border-${theme.main} focus:border-transparent`,
    "focus:shadow-outline-light",
    `text-base text-${theme.main} leading-6`,
    "font-medium",
    "rounded-md",
  ],
  credits: [`text-${theme.subtitle}`, "font-base", "py-3"],
});

export default function Index() {
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
}
