class Storage {
  constructor() {
    this._prefix = "lofi_";
    this._localStorageSupport = true;

    try {
      window.localStorage.setItem("lofi_", "it Works!!!");
      window.localStorage.removeItem("lofi_");
    } catch (e) {
      this._localStorageSupport = false;
    }
  }

  getStorage() {
    const storage = {};
    if (!this._localStorageSupport) {
      return storage;
    }
    Object.keys(window.localStorage)
      .filter((id) => id.startsWith(this._prefix))
      .forEach((id) => {
        storage[id] = this.get(id, null);
      });

    return storage;
  }

  get(id, prefix = this._prefix) {
    if (prefix) {
      id = prefix + id;
    }

    try {
      return JSON.parse(
        this._localStorageSupport ? window.localStorage.getItem(id) : null
      );
    } catch (e) {
      return null;
    }
  }

  set(id, value, prefix = this._prefix) {
    let storageId = id;
    if (prefix) {
      storageId = prefix + id;
    }

    value = JSON.stringify(value);
    if (this._localStorageSupport) {
      window.localStorage.setItem(storageId, value);
    }
  }

  remove(id, prefix = this._prefix) {
    let storageId = id;
    if (prefix) {
      storageId = prefix + id;
    }

    if (this._localStorageSupport) {
      window.localStorage.removeItem(storageId);
    }
  }
}

export default Storage;
