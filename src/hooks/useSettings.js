/**
 * @typedef {import('../contexts/settings').SettingsType} SettingsType
 */
import { useContext } from "react";
import SettingsContext from "../contexts/settings";

/**
 * @callback SetFavoriteBackground
 * @param {string} url
 */

/**
 * @callback SetMeasurementSystem
 * @param {'METRIC'|'IMPERIAL'} type
 */

/**
 * @typedef {object} UseSettingsReturn
 * @property {SettingsType} settings
 * @property {SetFavoriteBackground} setFavoriteBackground
 * @property {SetMeasurementSystem} setMeasurementSystem
 */

/**
 * @returns {UseSettingsReturn}
 */
const useSettings = () => {
  const { settings, updateSettings, resetSettings } =
    useContext(SettingsContext);

  const reset = () => {
    resetSettings();
  };

  const setFavoriteBackground = (url) => {
    updateSettings({
      ...settings,
      favoriteBackground: url,
    });
  };

  /**
   * @param {'METRIC'|'IMPERIAL'} type
   */
  const setMeasurementSystem = (system) => {
    updateSettings({
      ...settings,
      measurementSystem: system,
    });
  };

  return {
    settings,
    setFavoriteBackground,
    setMeasurementSystem,
    reset,
  };
};

export { useSettings };
