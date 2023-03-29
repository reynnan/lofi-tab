import Storage from "./storage/storage";

class WeatherStore extends Storage {
  constructor() {
    super();
    this.WEATHER_KEY = "CURRENT_WEATHER";
  }

  saveWeather(weather) {
    this.set(this.WEATHER_KEY, weather);
  }
  getWeather() {
    return this.get(this.WEATHER_KEY) || {};
  }
}

export default new WeatherStore();
