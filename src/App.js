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
  const [playLofi, setPlayLofi] = React.useState(false);
  const classes = useStyles({
    backgroundUrl: bgUrl,
  });

  return (
    <div className={classes.lofiBg}>
      <Header
        shuffle={() => setBgUrl(shuffleBackground())}
        toggleStar={() => toggleFavoriteBackground(bgUrl)}
        isStarred={bgUrl === getFavoriteBackground()}
        onPlayLPofi={() => setPlayLofi((state) => !state)}
        isLofiPlaying={playLofi}
      />
      <main className={classes.main}>
        {playLofi && (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        )}
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
