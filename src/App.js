import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import Header from "./components/Header";
import Background from "./components/Background";
import { makeStyles } from "@material-ui/core/styles";
import { useSettings } from './hooks/useSettings';
import { getRandomNumber } from './utils/getRandomNumber';
import { LOFI_GIFS } from './constants';
import OpenWeatherClient from "./clients/OpenWeather";

const useStyles = makeStyles({
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

const getRandomBgIndex = () => getRandomNumber(0, LOFI_GIFS.length - 1);

const getBgIndex = (favoriteBgIndex) => favoriteBgIndex
  ? favoriteBgIndex
  : getRandomBgIndex();

const App = () => {
  const { settings, setFavoriteBackground } = useSettings();
  const [bgIndex, setBgIndex] = React.useState(getBgIndex(settings.favoriteBackground));
  const [weather, setWeather] = React.useState("Loading...");

  const classes = useStyles();

  React.useEffect(async () => {
    const data = await OpenWeatherClient.getCurrentWeather();
    setWeather({
      city: data.name,
      country: data.sys.country,
      temp: parseInt(data.main.temp),
    });
  }, []);

  const isFavorite = bgIndex === settings.favoriteBackground;

  return (
    <Background bgIndex={bgIndex}>
      <Header
        shuffle={() => setBgIndex(getRandomBgIndex())}
        toggleStar={() => isFavorite ? setFavoriteBackground() : setFavoriteBackground(bgIndex)}
        isStarred={isFavorite}
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
          <Link target="_blank" color="secondary" href={LOFI_GIFS[bgIndex]}>
            Gif Source
          </Link>
        </Typography>
      </footer>
    </Background>
  );
};

export default App;
