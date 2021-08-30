import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffd740",
    },
  },
});

const mountNode = document.getElementById("app");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  mountNode
);
