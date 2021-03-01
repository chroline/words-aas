export interface Theme {
  background: string;
  tabColor: string;
  main: string;
  highlight: { main: string; hover: string; complement: string };
  subtitle: string;
  altBtn: { hover: string };
}

export const light: Theme = {
  background: "#f6f6f9",
  tabColor: "#f6f6f9",
  main: "black",
  highlight: {
    main: "#3F51B5",
    hover: "#7986CB",
    complement: "white",
  },
  subtitle: "#607D8B",
  altBtn: {
    hover: "#BDBDBD",
  },
};

export const dark: Theme = {
  background: "#212121",
  tabColor: "#212121",
  main: "white",
  highlight: {
    main: "#3F51B5",
    hover: "#7986CB",
    complement: "white",
  },
  subtitle: "#ECEFF1",
  altBtn: {
    hover: "#616161",
  },
};
