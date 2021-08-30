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
import OpenWeatherClient from "./clients/OpenWeather";

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
  weatherWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
  },
  temperature: {
    fontWeight: 500,
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
  const [weather, setWeather] = React.useState("Loading...");
  const classes = useStyles({
    backgroundUrl: bgUrl,
  });

  React.useEffect(async () => {
    const data = await OpenWeatherClient.getCurrentWeather();
    setWeather({
      city: data.name,
      country: data.sys.country,
      temp: parseInt(data.main.temp),
    });
  }, []);

  return (
    <div className={classes.lofiBg}>
      <Header
        shuffle={() => setBgUrl(shuffleBackground())}
        toggleStar={() => toggleFavoriteBackground(bgUrl)}
        isStarred={bgUrl === getFavoriteBackground()}
      />
      <main className={classes.weatherWrapper}>
        <Typography
          variant="h1"
          color="primary"
          className={classes.temperature}
        >
          {weather.temp} ºC
        </Typography>
        <Typography
          variant="subtitle1"
          color="primary"
          className={classes.temperature}
        >
          {weather.city}, {weather.country}
        </Typography>
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
