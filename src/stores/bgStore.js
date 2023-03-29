import Storage from "./storage/storage";

class BackGroundStore extends Storage {
  constructor() {
    super();
    this.NEW_TAB_KEY = "LOFI_NEW_TAB";
  }
  getFavorite() {
    return this.get(this.NEW_TAB_KEY);
  }
  clearFavorite() {
    this.remove(this.NEW_TAB_KEY);
  }
  toggleFavorite(bgUrl) {
    const favoriteUrl = this.getFavorite();
    favoriteUrl === bgUrl
      ? this.clearFavorite()
      : this.set(this.NEW_TAB_KEY, bgUrl);
  }
  saveFavorite(bgUrl) {
    this.set(this.NEW_TAB_KEY, bgUrl);
  }
}

export default new BackGroundStore();
