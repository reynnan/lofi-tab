import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { LOFI_GIFS } from '../constants';

const useStyles = makeStyles({
  lofiBg: {
    background: (props) => `url(${props.backgroundUrl})`,
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover !important",
    backgroundPosition: "center !important",
    height: "100% !important",
    display: "flex",
    flexDirection: "column",
  },
});

const Background = ({ children, bgIndex }) => {
  const classes = useStyles({
    backgroundUrl: LOFI_GIFS[bgIndex],
  });

  return (
    <div className={classes.lofiBg}>
      {children}
    </div>
  )
}

export default Background;