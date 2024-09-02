
import { Typography } from '@material-ui/core';
import React, { useState, useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  clock: {
    fontWeight: 500,
  },
}));

function Clock() {
  const classes = useStyles();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');

    return (
        <Typography variant="h1" color="primary" className={classes.clock}>
            {hours}:{minutes}
        </Typography>)

}

export default Clock;