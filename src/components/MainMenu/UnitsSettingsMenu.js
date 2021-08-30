import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Menu from "./Menu";
import { useSettings } from "../../hooks/useSettings";
import { MEASUREMENT_SYSTEMS } from "../../constants";

const UnitsSettingsMenu = ({ isOpen, onRequestClose }) => {
  const { settings, setMeasurementSystem } = useSettings();

  const handleChange = (event) => {
    setMeasurementSystem(event.target.value);
  };

  return (
    <React.Fragment>
      <Menu isOpen={isOpen} onRequestClose={onRequestClose}>
        <FormControl component="fieldset">
          <List>
            <RadioGroup
              aria-label="measurement system"
              value={settings.measurementSystem}
              onChange={handleChange}
            >
              <ListItem>
                <FormControlLabel
                  value={MEASUREMENT_SYSTEMS.METRIC}
                  control={<Radio />}
                  label="Metric"
                />
              </ListItem>
              <ListItem>
                <FormControlLabel
                  value={MEASUREMENT_SYSTEMS.IMPERIAL}
                  control={<Radio />}
                  label="Imperial"
                />
              </ListItem>
            </RadioGroup>
          </List>
        </FormControl>
      </Menu>
    </React.Fragment>
  );
};

export default UnitsSettingsMenu;
