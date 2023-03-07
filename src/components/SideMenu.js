import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import PopOverOnHover from "./PopOverOnHover";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function SideMenu({ children }) {
  const classes = useStyles();
  const [isOpen, toggle] = React.useReducer((state) => !state, false);

  return (
    <div>
      <IconButton onClick={toggle} aria-label="open menu" color="secondary">
        <PopOverOnHover popOverText="Open menu">
          <MenuIcon />
        </PopOverOnHover>
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={toggle}>
        <div className={classes.list} role="presentation">
          {children}
        </div>
      </Drawer>
    </div>
  );
}
