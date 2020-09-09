import CryptoJS from "crypto-js";

export const getItem = (key) => {
  let item = JSON.parse(localStorage.getItem(key));

  if (!item) {
    return null;
  }

  let bytes = CryptoJS.AES.decrypt(item, process.env.REACT_APP_API_SIGNATURE);
  let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decryptedData;
};

export const setItem = (key, value) => {
  let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(value), process.env.REACT_APP_API_SIGNATURE).toString();

  localStorage.setItem(key, JSON.stringify(ciphertext));
};

export const removeItem = (key) => {
  let item = JSON.parse(localStorage.getItem(key));

  if (!item) {
    return undefined;
  }

  localStorage.removeItem(key);
};

export const clear = () => {
  localStorage.clear();
};
