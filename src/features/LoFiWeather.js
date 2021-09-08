import React from "react";
import Weather from "../components/Weather";
import OpenWeatherClient from "../clients/OpenWeather";
import CircularProgress from "@material-ui/core/CircularProgress";
import lscache from "lscache";

const KEY = "LOFI_WEATHER";
const WEATHER_CACHE = lscache.get(KEY);
const WEATHER_BASE = {
  country: "",
  city: "",
  temp: "",
};
const INIT = WEATHER_CACHE ? WEATHER_CACHE : WEATHER_BASE;

const LoFiWeather = () => {
  const [weather, setWeather] = React.useState(INIT);

  React.useEffect(async () => {
    if (!WEATHER_CACHE) {
      const data = await OpenWeatherClient.getCurrentWeather();
      const weather = {
        city: data.name,
        country: data.sys.country,
        temp: parseInt(data.main.temp),
      };
      lscache.set(KEY, weather, 10);
      setWeather(weather);
    }
  }, []);

  return (
    <>
      <Weather
        temperature={weather.temp}
        city={weather.city}
        country={weather.country}
        system="º C"
      />

      {weather.temp === "" && <CircularProgress />}
    </>
  );
};

export default LoFiWeather;
