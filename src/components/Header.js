import React from "react";
import Grid from "@material-ui/core/Grid";

import IconButton from "@material-ui/core/IconButton";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import MusicOffIcon from "@material-ui/icons/MusicOff";

import PopOverOnHover from "./PopOverOnHover";
import LoFiWeather from "../features/LoFiWeather";
import LofiMenu from "../features/LofiMenu";

const Header = ({
  shuffle,
  toggleStar,
  isStarred,
  onPlayLofi,
  isLofiPlaying,
}) => {
  return (
    <header>
      <Grid container justifyContent="space-between" alignItems="flex-start">
        <Grid
          item
          xs={6}
          container
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item>
            <LofiMenu />
          </Grid>
          <Grid item>
            <IconButton
              aria-label="random background"
              onClick={shuffle}
              color="secondary"
            >
              <PopOverOnHover popOverText="Shuffle background">
                <ShuffleIcon />
              </PopOverOnHover>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="set background as favorite"
              onClick={toggleStar}
              color="secondary"
            >
              {isStarred ? (
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
          <Grid item>
            {isLofiPlaying ? (
              <IconButton
                aria-label="stop lofi music"
                color="secondary"
                onClick={onPlayLofi}
              >
                <PopOverOnHover popOverText="Stop lofi">
                  <MusicOffIcon />
                </PopOverOnHover>
              </IconButton>
            ) : (
              <IconButton
                aria-label="play lofi music"
                color="secondary"
                onClick={onPlayLofi}
              >
                <PopOverOnHover popOverText="Play lofi">
                  <MusicNoteIcon />
                </PopOverOnHover>
              </IconButton>
            )}
          </Grid>
        </Grid>
        <Grid item container justifyContent="flex-end" xs={6}>
          <LoFiWeather />
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
