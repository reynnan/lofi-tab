import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { getRandomBackground } from "./utils/getRandomBackground";
import {
  getFavoriteBackground,
  toggleFavoriteBackground,
  clearFavoriteBackground,
} from "./utils/localStorageBackground";
import LoFiWeather from "./features/LoFiWeather";

const useStyles = makeStyles({
  lofiBg: {
    background: (props) => `url(${props.backgroundUrl})`,
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover !important",
    backgroundPosition: "center !important",
    height: "100% !important",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
  },
});

const shuffleBackground = () => {
  clearFavoriteBackground();
  return getRandomBackground();
};

const INIT_STATE = getFavoriteBackground()
  ? getFavoriteBackground()
  : getRandomBackground();

const App = () => {
  const [bgUrl, setBgUrl] = React.useState(INIT_STATE);
  const classes = useStyles({
    backgroundUrl: bgUrl,
  });

  return (
    <div className={classes.lofiBg}>
      <Header
        shuffle={() => setBgUrl(shuffleBackground())}
        toggleStar={() => toggleFavoriteBackground(bgUrl)}
        isStarred={bgUrl === getFavoriteBackground()}
      />
      <main className={classes.main}>
        <LoFiWeather />
      </main>
      <footer>
        <Typography variant="subtitle2">
          <Link target="_blank" color="secondary" href={bgUrl}>
            Gif Source
          </Link>
        </Typography>
      </footer>
    </div>
  );
};

export default App;
