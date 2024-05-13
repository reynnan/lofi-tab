// TODO: remove as it was moved to storage..
const LOCALSTORAGE_KEY = "LOFI_NEW_TAB";

const getFavoriteBackground = () => {
  return localStorage.getItem(LOCALSTORAGE_KEY);
};

const clearFavoriteBackground = () => {
  localStorage.removeItem(LOCALSTORAGE_KEY);
};

const toggleFavoriteBackground = (bgUrl) => {
  const favoriteUrl = getFavoriteBackground();
  favoriteUrl === bgUrl
    ? clearFavoriteBackground()
    : localStorage.setItem(LOCALSTORAGE_KEY, bgUrl);
};

const persistFavoriteBackground = (bgUrl) => {
  localStorage.setItem(LOCALSTORAGE_KEY, bgUrl);
};

export {
  getFavoriteBackground,
  toggleFavoriteBackground,
  clearFavoriteBackground,
  persistFavoriteBackground,
};
