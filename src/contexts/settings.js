import React from "react";
import { getRandomBackground } from "../components/Background";
import { MEASUREMENT_SYSTEMS } from "../constants";
import * as localStorage from "../utils/localStorage";

const DEFAULT_SETTINGS = {
  background: null,
  favoriteBackground: null,
  measurementSystem: MEASUREMENT_SYSTEMS.METRIC,
};

const INIT_SETTINGS = (() => {
  const storage = localStorage.get();
  if (!storage) {
    localStorage.set({
      favoriteBackground: null,
      measurementSystem: MEASUREMENT_SYSTEMS.METRIC,
    });
    return DEFAULT_SETTINGS;
  }

  const { favoriteBackground, measurementSystem } = storage;

  return {
    background: favoriteBackground ? favoriteBackground : getRandomBackground(),
    favoriteBackground,
    measurementSystem,
  };
})();

const settingsReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_BACKGROUND": {
      const { newBackground, setFavorite } = action.payload;
      const favoriteBackground = setFavorite ? newBackground : null;

      localStorage.set({
        ...localStorage.get(),
        favoriteBackground,
      });

      return {
        ...state,
        favoriteBackground,
        background: newBackground,
      };
    }

    case "UPDATE_MEASUREMENT_SYSTEM": {
      const { system } = action.payload;
      localStorage.set({
        ...localStorage.get(),
        measurementSystem: system,
      });

      return {
        ...state,
        measurementSystem: system,
      };
    }

    case "TOGGLE_FAVORITE": {
      const hasFavorite = state.favoriteBackground === state.background;
      const favoriteBackground = hasFavorite ? null : state.background;

      localStorage.set({
        ...localStorage.get(),
        favoriteBackground,
      });

      return {
        ...state,
        favoriteBackground,
      };
    }
  }
};

const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [settings, dispatch] = React.useReducer(settingsReducer, INIT_SETTINGS);

  // NOTE: I *might* need to memoize this value
  // http://kcd.im/optimize-context
  const value = { settings, dispatch };
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

const useSettings = () => {
  const context = React.useContext(SettingsContext);
  return context;
};

export { SettingsProvider, useSettings };
