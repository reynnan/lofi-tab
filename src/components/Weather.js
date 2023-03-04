import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingRight: theme.spacing(2),
  },
  temperature: {
    fontWeight: 500,
  },
}));

const Weather = ({ temperature, system, country, city }) => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Typography variant="h2" color="primary" className={classes.temperature}>
        {`${temperature} ${system}`}
      </Typography>
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
