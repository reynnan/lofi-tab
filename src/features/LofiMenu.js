import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideMenu from "../components/SideMenu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { LOFI_GIFS } from "../constants";
import {
  useBackgroundDispatch,
  ACTIONS,
  useBackgroundState,
} from "../providers/BackgroundProvider";

const useStyles = makeStyles({
  bgPreview: {
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover !important",
    backgroundPosition: "center !important",
    width: "300px",
    height: "150px",
  },
  lofiList: {
    "& .Mui-selected": {
      backgroundColor: "#FFD700",
      color: "#FFD700",
      fontWeight: "bold",
    },
    "& .Mui-selected:hover": {
      backgroundColor: "#FFE68F",
    },
  },
});

export default function LofiMenu() {
  const bgState = useBackgroundState();
  const bgDispatch = useBackgroundDispatch();
  const classes = useStyles();
  return (
    <SideMenu>
      <List className={classes.lofiList}>
        {LOFI_GIFS.map((gifUrl) => (
          <ListItem
            key={gifUrl}
            button
            selected={gifUrl === bgState.url}
            onClick={() => bgDispatch(ACTIONS.SET_BACKGROUND(gifUrl))}
          >
            <div
              className={classes.bgPreview}
              style={{
                background: `url(${gifUrl})`,
              }}
            />
          </ListItem>
        ))}
      </List>
    </SideMenu>
  );
}
