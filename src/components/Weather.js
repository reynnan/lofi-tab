import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  temperature: {
    fontWeight: 500,
  },
});

const Weather = ({ temperature, system, country, city }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h1" color="primary" className={classes.temperature}>
        {`${temperature} ${system}`}
      </Typography>
      <Typography
        variant="subtitle1"
        color="primary"
        className={classes.temperature}
      >
        {city}, {country}
      </Typography>
    </>
  );
};

export default Weather;
