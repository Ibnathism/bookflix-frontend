import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#081C15",
    },
    primary: {
      main: "#2D6A4F",
      dark: "#081C15",
      light: "#D8F3DC",
    },
    secondary: {
      main: "#74C69D",
    },
    info: {
      main: "#D8F3DC",
    },
  },
  typography: {
    h1: {
      fontSize: "50px",
      fontFamily: "Concert One",
      color: "#D8F3DC",
    },
    h2: {
      fontSize: "30px",
      fontFamily: "Concert One",
      color: "#D8F3DC",
    },
    h3: {
      fontSize: "24px",
    },
    h4: {
      fontSize: "18px",
    },
    body1: {
      fontSize: "11px",
      fontFamily: "Gelasio",
    },
  },
});

export default theme;
