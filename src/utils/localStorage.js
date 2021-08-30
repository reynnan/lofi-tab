const LOCALSTORAGE_KEY = "LOFI_NEW_TAB";

/**
 * @typedef {object} StorageType
 * @property {import('./settingsContext').SettingsType} settings
 */

/**
 * @returns {StorageType} 
 */
export const get = () => {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
};

/**
 * @param {StorageType} value 
 */
export const set = (value) => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(value));
};

export const clear = () => {
  localStorage.removeItem(LOCALSTORAGE_KEY);
};
