import { StylesFn } from "./colors";

const stylesFn: StylesFn = theme => ({
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

export default stylesFn;
