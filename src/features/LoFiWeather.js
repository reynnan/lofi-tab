import React from "react";
import Box from "@material-ui/core/Box";
import Weather from "../components/Weather";
import OpenWeatherClient from "../clients/OpenWeather";
import CircularProgress from "@material-ui/core/CircularProgress";
import lscache from "lscache";
import mixpanel from "mixpanel-browser"
import { convertTemperature } from "../utils/convertTemperature";

const KEY = "LOFI_WEATHER";
const WEATHER_CACHE = lscache.get(KEY);
const WEATHER_BASE = {
  country: "",
  city: "",
  temp: "",
  unit: "C",
};
const INIT = WEATHER_CACHE ?? WEATHER_BASE;

const Loading = () => (
  <Box sx={{ padding: 12 }}>
    <CircularProgress />
  </Box>
);

const LoFiWeather = () => {
  const [weather, setWeather] = React.useState(INIT);

  React.useEffect(async () => {
    if (!WEATHER_CACHE) {
      const unit = localStorage.getItem("unit") || "C";
      const data = await OpenWeatherClient.getCurrentWeather(unit);
      const weather = {
        city: data.name,
        country: data.sys.country,
        temp: parseInt(data.main.temp),
        unit: unit,
      };
      lscache.set(KEY, weather, 30);
      setWeather(weather);
    }
  }, []);

  if (weather.temp === WEATHER_BASE.temp) return <Loading />;

  return (
    <Weather
      temperature={weather.temp}
      city={weather.city}
      country={weather.country}
      unit={weather.unit}
      onClick={() => {
        setWeather(weather => {
          const unit = weather.unit === "C" ? "F" : "C";
          mixpanel.track("LofiWeather - Toggle unit to:", { unit })
          const newWeather = {
            ...weather,
            temp: convertTemperature(weather.temp, weather.unit),
            unit,
          }
          // update unit preference so we dont lose it on page in the cache invalidation below
          localStorage.setItem("unit", unit)
          // updating cache with new converted temperature, for the next page refresh
          lscache.set(KEY, newWeather, 30);
          return (newWeather);
        })
      }}
    />
  );
};

export default LoFiWeather;
