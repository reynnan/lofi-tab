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
import { CircularProgress, Fade } from "@material-ui/core";

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
  const [playLofi, setPlayLofi] = React.useState({
    play: false,
    loading: false,
  });
  const classes = useStyles({
    backgroundUrl: bgUrl,
  });

  return (
    <div className={classes.lofiBg}>
      <Header
        shuffle={() => setBgUrl(shuffleBackground())}
        toggleStar={() => toggleFavoriteBackground(bgUrl)}
        isStarred={bgUrl === getFavoriteBackground()}
        onPlayLPofi={() =>
          setPlayLofi((state) => ({ play: !state.play, loading: !state.play }))
        }
        isLofiPlaying={playLofi.play}
      />
      <main className={classes.main}>
        {playLofi.play && (
          <>
            {playLofi.loading && <CircularProgress />}
            <Fade
              in={!playLofi.loading}
              style={{ display: playLofi.loading ? "none" : "" }}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/n61ULEU7CO0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                onLoad={() =>
                  setPlayLofi((state) => ({ ...state, loading: false }))
                }
              />
            </Fade>
          </>
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
