import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingRight: theme.spacing(2),
  },
  weather: {
    display: "flex",
  },
  separator: {
    margin: theme.spacing(0, 0.5),
  },
  temperature: {
    fontWeight: 500,
  },
  convertWeather: {
    cursor: "pointer",
  }
}));

const Weather = ({ temperature, unit, country, city, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.weather}> 
        <Typography variant="h2" color="primary" className={classes.temperature}>
          {temperature}
        </Typography>
        <Typography variant="h6" color="primary">
          °{unit}
        </Typography>
        <Typography variant="h6" color="textPrimary" className={classes.separator}>|</Typography>
        <Typography variant="h6" color="textPrimary" component="span" onClick={onClick} className={classes.convertWeather}>
          °{unit === "C" ? "F" : "C"}
        </Typography>
      </div>
      <Typography
        variant="subtitle1"
        color="primary"
        className={classes.temperature}
      >
        {city}, {country}
      </Typography>
    </div>
  );
};

export default Weather;
