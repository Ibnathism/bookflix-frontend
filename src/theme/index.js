import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#030c08",
    },
    primary: {
      main: "#2D6A4F",
      dark: "#030c08",
      light: "#D8F3DC",
    },
    secondary: {
      main: "#80DEEA",
    },
    info: {
      main: "#D8F3DC",
    },
  },
  typography: {
    h1: {
      fontSize: "48px",
      color: "#D8F3DC",
    },
    h2: {
      fontSize: "32px",
      color: "#D8F3DC",
      fontWeight: "bold",
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
