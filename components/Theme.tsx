import React, { createContext, ReactNode, useContext, useEffect } from "react";
import { light, dark } from "../util/styles";
import { AnimatePresence, motion } from "framer-motion";

const defaultContextData = {
  dark: false,
  theme: dark,
  toggle: () => {},
};

const ThemeContext = createContext(defaultContextData);
export const useTheme = () => useContext(ThemeContext);

const useDarkMode = (): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [themeState, setThemeState] = React.useState(false);

  useEffect(() => {
    let isDark = localStorage.getItem("dark") === "true";
    if (localStorage.getItem("dark") == null) isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    localStorage.setItem("dark", String(isDark));
    setThemeState(isDark);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => setThemeState(media.matches);
    if (typeof media.addEventListener !== "undefined") {
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    } else if (typeof media.addListener !== "undefined") {
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  });

  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setDark] = useDarkMode();

  const theme = isDark ? dark : light;
  const toggle = () => {
    localStorage.setItem("dark", String(!isDark));
    setDark(!isDark);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={isDark + "" + new Date().getMilliseconds()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ThemeContext.Provider
          value={{
            dark: isDark,
            theme,
            toggle,
          }}
        >
          {children}
        </ThemeContext.Provider>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeProvider;
