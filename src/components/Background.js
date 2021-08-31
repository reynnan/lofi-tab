import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { LOFI_GIFS } from "../constants";
import { getRandomNumber } from "../utils/getRandomNumber";

const getRandomBgIndex = () => getRandomNumber(0, LOFI_GIFS.length - 1);
export const getRandomBackground = () => LOFI_GIFS[getRandomBgIndex()];

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

const Background = ({ children, url }) => {
  const classes = useStyles({
    backgroundUrl: url,
  });

  return <div className={classes.lofiBg}>{children}</div>;
};

export default Background;
