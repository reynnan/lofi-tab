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

const Header = ({
  shuffle,
  toggleStar,
  isStarred,
  onPlayLPofi,
  isLofiPlaying,
}) => {
  const [isStar, setStar] = React.useState(isStarred);

  const toggle = () => {
    toggleStar();
    setStar((state) => !state);
  };

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
          <Grid item>
            {isLofiPlaying ? (
              <IconButton
                aria-label="stop lofi music"
                color="secondary"
                onClick={onPlayLPofi}
              >
                <PopOverOnHover popOverText="Stop Lofi">
                  <MusicOffIcon />
                </PopOverOnHover>
              </IconButton>
            ) : (
              <IconButton
                aria-label="play lofi music"
                color="secondary"
                onClick={onPlayLPofi}
              >
                <PopOverOnHover popOverText="Play Lofi">
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
