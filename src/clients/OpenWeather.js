const API_KEY = "1650e52d9cbc5bdf5c79b3f1b6160a08";
const URL = `https://api.openweathermap.org/data/2.5/weather?`;

import { getLatLong } from "../utils/getLatLong";

const OpenWeatherClient = {
  getCurrentWeather: async () => {
    const { lat, long } = await getLatLong();
    const queryParams = new URLSearchParams({
      lat: lat,
      lon: long,
      appid: API_KEY,
      units: "metric",
    });
    return fetch(URL + queryParams).then((res) => res.json());
  },
};

export default OpenWeatherClient;
