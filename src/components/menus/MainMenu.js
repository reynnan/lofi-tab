import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';

import Menu from '../Menu';
import SettingsMenu from './SettingsMenu';

const MainMenu = ({ isOpen, onRequestClose }) => {
  const [selectedSubMenu, setSelectedSubMenu] = React.useState(-1);

  const getOpenSubmenuHandler = (index) => () => {
    setSelectedSubMenu(index);
  };

  const handleSubMenuClose = () => {
    setSelectedSubMenu(-1);
  };

  const items = [
    {
      key: 'settings',
      text: 'Settings',
      icon: <SettingsIcon />,
      handleClick: getOpenSubmenuHandler(0),
    }
  ]

  return (
    <React.Fragment>
      <Menu
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        items={items}
      />
      <SettingsMenu
        isOpen={selectedSubMenu === 0}
        onRequestClose={handleSubMenuClose}
      />
    </React.Fragment>
  )
};

export default MainMenu;