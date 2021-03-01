import React from "react";
import { useTheme } from "../components/Theme";
import Head from "next/head";

export default function Index() {
  const { theme } = useTheme();
  return (
    <>
      <Head>
        <title>words-aas</title>
        <meta name="theme-color" content={theme.tabColor} />
      </Head>
      <div className={"wrapper"}>
        <h1>
          <span>Words</span> as a Service
        </h1>
        <p className={"subtitle"}>A simple API to generate unique randomized words & phrases.</p>
        <div className={"buttons"}>
          <a href={"https://github.com/chroline/words-aas"}>View on GitHub</a>
        </div>
      </div>
      <p className={"credits"}>made with ❤️ by Cole Gawin</p>
      <style jsx global>{`
        html,
        body,
        #__next {
          width: 100%;
          height: 100%;
          margin: 0;

          background: ${theme.background};
        }

        * {
          transition: all 0.3s;
        }
      `}</style>
      <style jsx>{`
        .wrapper {
          width: 100%;
          height: 100%;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          padding: 0 1.5rem;
        }

        h1 {
          font-family: "Crimson Pro", serif;
          font-weight: bold;
          font-style: italic;
          font-size: 3.75rem;
          color: ${theme.main};
          line-height: 1;

          margin-bottom: 1rem;
        }

        h1 span {
          font-style: normal;
          color: ${theme.highlight.main};
        }

        .subtitle {
          font-size: 1.25rem;
          color: ${theme.subtitle};
          line-height: 1.625;
        }

        hr {
          border: none;
          border-bottom: 1px solid ${theme.altBtn.hover};
          margin: 1.5rem;
        }

        .buttons {
          margin: 2rem;
        }

        .buttons a {
          display: inline-block;
          width: 100%;

          color: white;
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.5rem;

          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
          border: 1px solid transparent;
          border-radius: 0.375rem;

          padding: 0.75rem 1.5rem;

          background: ${theme.highlight.main};
        }

        .buttons a:hover {
          background: ${theme.highlight.hover};
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.19);
        }

        .buttons a:active {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.17);
        }

        .buttons a:focus {
          background: ${theme.highlight.hover};
          box-shadow: 0 0 0 3px rgba(63, 81, 181, 0.3);

          outline: none;
        }

        .credits {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;

          text-align: center;
          color: ${theme.subtitle};
          font-size: 1rem;

          padding: 1.5rem 0;
        }
      `}</style>
    </>
  );
}
