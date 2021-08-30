import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Menu from '../Menu';
import { useSettings } from '../../hooks/useSettings';
import { LOFI_GIFS } from '../../constants';

const useStyles = makeStyles({
  bgPreview: {
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover !important",
    backgroundPosition: "center !important",
    width: '208px',
    height: '117px',
    display: "flex",
  },
});

const BackgroundSettingsMenu = ({ isOpen, onRequestClose }) => {
  const { settings, setFavoriteBackground } = useSettings();

  const classes = useStyles();

  return (
    <React.Fragment>
      <Menu
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <List>
          {LOFI_GIFS.map((gifUrl, index) => {
            return (
              <ListItem
                key={gifUrl}
                button
                selected={settings.favoriteBackground === index}
                onClick={() => setFavoriteBackground(index)}
              >
                <div
                  className={classes.bgPreview}
                  style={{
                    background: `url(${gifUrl})`,
                  }}
                />
              </ListItem>
            )
          })}
        </List>
      </Menu>
    </React.Fragment>
  )
};

export default BackgroundSettingsMenu;