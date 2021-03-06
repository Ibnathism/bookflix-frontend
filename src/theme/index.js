import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#030c08", //dark green
    },
    primary: {
      //main: "#2D6A4F", //mora green
      main: "#2EA44F", //github green
      //main: "#1ED760", //spotify
      dark: "#030c08", //dark green
      light: "#D8F3DC", //white green
    },
    secondary: {
      //main: "#80DEEA", // light blue
      main: "#9fe0e3", // better light blue
      //main: "#9ad6d9",
      dark: "#fc5e03", //orange
    },
    info: {
      main: "#D8F3DC", //white green
      light: "#dee3df", //whiter green
    },
    action: {
      active: "#384742",
    },
  },
  typography: {
    fontFamily: [
      "system-ui",
      "sans-serif",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
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
      color: "#2EA44F",
    },
    body1: {
      fontSize: "11px",
      color: "#030c08",
    },
  },
});

export default theme;
