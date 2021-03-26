export const storeItem = (item, store) => {
  if (localStorage.getItem(store) != null) {
    localStorage.setItem(store, localStorage.getItem(store) + item + ",");
  } else {
    localStorage.setItem(store, item + ",");
  }
};

export const checkItem = (item, store) => {
  if (
    localStorage.getItem(store) != null &&
    localStorage
      .getItem(store)
      .split(",")
      .includes(item + "")
  )
    return true;
  return false;
};

export const getStoredItem = (store) => {
  if (localStorage.getItem(store) != null) {
    return localStorage.getItem(store);
  }
  return null;
};

export const getStoredArray = (store) => {
  if (localStorage.getItem(store) != null) {
    return localStorage
      .getItem(store)
      .split(",")
      .filter((item) => item.length > 0);
  }
  return [];
};
