import React from "react";
import Typography from "@material-ui/core/Typography";

import Header from "./components/Header";
import Background, { getRandomBackground } from "./components/Background";
import MainMenu from "./components/MainMenu";
import { makeStyles } from "@material-ui/core/styles";
import { useSettings } from "./contexts/Settings";

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
  const { settings, dispatch } = useSettings();
  const [weather, setWeather] = React.useState("Loading...");
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const hasFavorite = settings.favoriteBackground !== null;

  React.useEffect(async () => {
    const data = await OpenWeatherClient.getCurrentWeather();
    setWeather({
      city: data.name,
      country: data.sys.country,
      temp: parseInt(data.main.temp),
    });
  }, []);

  const shuffle = () => {
    dispatch({
      type: "UPDATE_BACKGROUND",
      payload: {
        newBackground: getRandomBackground(),
        setFavorite: false,
      },
    });
  };

  const toggleStar = () => {
    dispatch({
      type: "TOGGLE_FAVORITE",
    });
  };

  return (
    <Background url={settings.background}>
      <Header
        openMenu={() => setMenuOpen(true)}
        shuffle={shuffle}
        toggleStar={toggleStar}
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
