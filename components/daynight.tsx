import React from "react";
import { useTheme } from "./Theme";

const Day: React.FC<{ size: number }> = ({ size }) => (
  <svg
    style={{
      width: size,
      height: size,
      color: "#FFA726",
      display: "inline-block",
    }}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const Night: React.FC<{ size: number }> = ({ size }) => (
  <svg
    style={{
      width: size,
      height: size,
      color: "#ECEFF1",
      display: "inline-block",
    }}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

const daynight: React.FC<{ size: number }> = ({ size }) => {
  const { theme, dark, toggle } = useTheme();
  typeof window !== "undefined" && (document.body.style.backgroundColor = theme.background);
  return (
    <>
      <div className={"day-night"}>
        <div style={{ cursor: "pointer" }} onClick={() => toggle()}>
          {dark ? <Night size={size} /> : <Day size={size} />}
        </div>
      </div>
      <style jsx>{`
        .day-night {
          position: absolute;
          top: 0;
          right: 0;
          margin: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default daynight;
