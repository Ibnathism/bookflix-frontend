import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#030c08",
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
      color: "#D8F3DC",
    },
    h2: {
      fontSize: "30px",
      color: "#D8F3DC",
    },
    h3: {
      fontSize: "16px",
      color: "#D8F3DC",
    },
    h4: {
      fontSize: "14px",
      color: "#74C69D",
    },
    body1: {
      fontSize: "11px",
    },
  },
});

export default theme;
