import React from 'react';
import PanoramaIcon from '@material-ui/icons/Panorama';
import HelpIcon from '@material-ui/icons/Help';

import Menu from '../Menu';
import BackgroundSettingsMenu from './BackgroundSettingsMenu';
import UnitsSettingsMenu from './UnitsSettingsMenu';

const SettingsMenu = ({ isOpen, onRequestClose }) => {
  const [selectedSubMenu, setSelectedSubMenu] = React.useState(-1);

  const getOpenSubmenuHandler = (index) => () => {
    setSelectedSubMenu(index);
  };

  const handleSubMenuClose = () => {
    setSelectedSubMenu(-1);
  };

  const items = [
    {
      key: 'favoriteBackground',
      text: 'Background',
      icon: <PanoramaIcon />,
      handleClick: getOpenSubmenuHandler(0),
    },
    {
      key: 'units',
      text: 'Units',
      // Find a good icon for this
      icon: <HelpIcon />,
      handleClick: getOpenSubmenuHandler(1),
    }
  ]

  return (
    <React.Fragment>
      <Menu
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        items={items}
      />
      <BackgroundSettingsMenu
        isOpen={selectedSubMenu === 0}
        onRequestClose={handleSubMenuClose}
      />
      <UnitsSettingsMenu
        isOpen={selectedSubMenu === 1}
        onRequestClose={handleSubMenuClose}
      />
    </React.Fragment>
  )
};

export default SettingsMenu;