import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: "#f57c00",
      main: "#ff9800",
      light: "#ffe0b2",
    },
    secondary: {
      main: "#03a9f4",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    divider: "#bdbdbd",
  },
  props: {
    MuiWithWidth: {
      initialWidth: "lg",
    },
  },
});

export default theme;
