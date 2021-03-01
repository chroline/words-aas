export type Styles = { [key: string]: string[] };

export interface Theme {
  background: string;
  tabColor: string;
  main: string;
  highlight: { main: string; hover: string; complement: string };
  subtitle: string;
  altBtn: { hover: string };
}

export const light: Theme = {
  background: "lightBg",
  tabColor: "#f6f6f9",
  main: "black",
  highlight: {
    main: "indigo-500",
    hover: "indigo-300",
    complement: "white",
  },
  subtitle: "blue-gray-500",
  altBtn: {
    hover: "blue-gray-300",
  },
};

export const dark: Theme = {
  background: "gray-900",
  tabColor: "#212121",
  main: "white",
  highlight: {
    main: "indigo-500",
    hover: "indigo-300",
    complement: "white",
  },
  subtitle: "blue-gray-50",
  altBtn: {
    hover: "blue-gray-400",
  },
};
