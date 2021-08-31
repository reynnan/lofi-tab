import React from "react";
import Grid from "@material-ui/core/Grid";

import IconButton from "@material-ui/core/IconButton";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";
import MenuIcon from '@material-ui/icons/Menu';

import PopOverOnHover from "./PopOverOnHover";

const Header = ({ shuffle, toggleStar, isStarred, openMenu }) => {
  const toggle = () => {
    toggleStar();
  };

  return (
    <header>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <IconButton
            aria-label="open menu"
            onClick={openMenu}
            color="secondary"
          >
            <MenuIcon />
          </IconButton>
          <PopOverOnHover popOverText="Shuffle Background">
            <IconButton
              aria-label="random background"
              onClick={shuffle}
              color="secondary"
            >
              <ShuffleIcon />
            </IconButton>
          </PopOverOnHover>
        </Grid>
        <Grid item>
          <PopOverOnHover popOverText={isStarred ? 'Unfavorite background' : 'Set default background'}>
            <IconButton
              aria-label={isStarred ? 'unfavorite background' : 'set background as favorite'}
              onClick={toggleStar}
              color="secondary"
            >
              {isStarred ? (
                <StarIcon />
              ) : (
                <StarOutlineIcon />
              )}
            </IconButton>
          </PopOverOnHover>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
