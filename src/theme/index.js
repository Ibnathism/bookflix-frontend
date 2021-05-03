import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#081C15",
    },
    primary: {
      main: "#2D6A4F",
      light: "#D8F3DC",
    },
    secondary: {
      main: "#74C69D",
    },
  },
  typography: {
    h1: {
      fontSize: "71px",
    },
    h2: {
      fontSize: "36px",
    },
    h3: {
      fontSize: "24px",
    },
    h4: {
      fontSize: "18px",
    },
    body1: {
      fontSize: "12px",
    },
  },
});

export default theme;
