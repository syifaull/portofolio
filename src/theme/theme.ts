import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: `"Work Sans", sans-serif`,
  },
  palette: {
    mode: "dark",
    background: {
      default: "#0f172a",
      paper: "#020617",
    },
    primary: {
      main: "#38bdf8",
    },
  },
});