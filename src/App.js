import React from "react";
import Typography from "@material-ui/core/Typography";

import Header from "./components/Header";
import Background, { getRandomBackground } from "./components/Background";
import MainMenu from "./components/MainMenu";
import { makeStyles } from "@material-ui/core/styles";
import { useSettings } from "./hooks/useSettings";

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

const App = () => {
  const classes = useStyles();
  const { settings, setFavoriteBackground } = useSettings();
  const hasFavorite = settings.favoriteBackground !== null;
  /* 
  It must be a better way of handling the current background
  initializing a state value from another state seems weird
  maybe creating a context that handle the favoriteBackground and
  the current background can be a better solution than this
  */
  const [background, setBackground] = React.useState(() =>
    hasFavorite ? settings.favoriteBackground : getRandomBackground()
  );
  const [weather, setWeather] = React.useState("Loading...");
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(async () => {
    const data = await OpenWeatherClient.getCurrentWeather();
    setWeather({
      city: data.name,
      country: data.sys.country,
      temp: parseInt(data.main.temp),
    });
  }, []);

  const shuffle = () => {
    setBackground(getRandomBackground());
    setFavoriteBackground(null);
  };

  return (
    <Background url={background}>
      <Header
        openMenu={() => setMenuOpen(true)}
        shuffle={shuffle}
        toggleStar={() =>
          hasFavorite
            ? setFavoriteBackground(null)
            : setFavoriteBackground(background)
        }
        isStarred={hasFavorite}
      />
      <MainMenu isOpen={isMenuOpen} onRequestClose={() => setMenuOpen(false)} />
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
    </Background>
  );
};

export default App;
