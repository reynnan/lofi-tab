import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import mixpanel from 'mixpanel-browser';

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BackgroundProvider } from "./providers/BackgroundProvider";
import "./index.css";

mixpanel.init('80f7ab31c5d6764862077355fec92584');

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
    <BackgroundProvider>
      <App />
    </BackgroundProvider>
  </ThemeProvider>,
  mountNode
);
