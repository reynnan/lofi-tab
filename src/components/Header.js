import React from "react";
import Grid from "@material-ui/core/Grid";

import IconButton from "@material-ui/core/IconButton";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";

import PopOverOnHover from "./PopOverOnHover";

const Header = ({ shuffle, toggleStar, isStarred }) => {
  const [isStar, setStar] = React.useState(isStarred);

  const toggle = () => {
    toggleStar();
    setStar((state) => !state);
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
            aria-label="random background"
            onClick={() => {
              shuffle();
              setStar(false);
            }}
            color="secondary"
          >
            <PopOverOnHover popOverText="Shuffle Background">
              <ShuffleIcon />
            </PopOverOnHover>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="set background as favorite"
            onClick={toggle}
            color="secondary"
          >
            {isStar ? (
              <PopOverOnHover popOverText="Unfavorite background">
                <StarIcon />
              </PopOverOnHover>
            ) : (
              <PopOverOnHover popOverText="Set default background">
                <StarOutlineIcon />
              </PopOverOnHover>
            )}
          </IconButton>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
