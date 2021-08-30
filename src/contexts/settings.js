import React from "react";
import { MEASUREMENT_SYSTEMS } from "../constants";
import * as localStorage from "../utils/localStorage";

/**
 * User settings values
 * @typedef {Object} SettingsType
 * @property {string} [favoriteBackground] - URL string of the user's favorite background
 * @property {'METRIC'|'IMPERIAL'} measurementSystem - What measurement system to use when displaying metrics. Imperial or Metric.\
 */

/**
 * @type {SettingsType}
 */
const DEFAULT_SETTINGS = {
  favoriteBackground: null,
  measurementSystem: MEASUREMENT_SYSTEMS.METRIC,
};

let storage = localStorage.get();

if (!storage || !storage.settings) {
  localStorage.set({
    ...storage,
    settings: DEFAULT_SETTINGS,
  });

  storage = localStorage.get();
}

const SettingsContext = React.createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = React.useState(storage.settings);

  const updateSettings = (value) => {
    localStorage.set({
      ...localStorage.get(),
      settings: value,
    });

    setSettings(value);
  };

  const resetSettings = () => {
    localStorage.set({
      ...localStorage.get(),
      settings: DEFAULT_SETTINGS,
    });

    setSettings(DEFAULT_SETTINGS);
  };

  return (
    <SettingsContext.Provider
      value={{ settings, updateSettings, resetSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
