function convertTemperature(temp, unit) {
  if (unit === "F") {
    return (((temp - 32) * 5) / 9).toFixed(0);
  } else if (unit === "C") {
    return ((temp * 9) / 5 + 32).toFixed(0);
  } else {
    return "Invalid unit specified. Please specify either 'C' or 'F'.";
  }
}

export { convertTemperature };
