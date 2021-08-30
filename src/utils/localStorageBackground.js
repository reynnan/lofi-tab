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

export {
  getFavoriteBackground,
  toggleFavoriteBackground,
  clearFavoriteBackground,
};
