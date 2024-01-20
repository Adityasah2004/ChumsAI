// localStorageUtils.js

const localStorageUtils = {
  setAccessToken: (token) => {
    localStorage.setItem("accessToken", token);
  },

  getAccessToken: () => {
    return localStorage.getItem("accessToken");
  },

  setUserId: (userId) => {
    localStorage.setItem("userId", userId);
  },

  getUserId: () => {
    return localStorage.getItem("userId");
  },

  clearLocalStorage: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
  },
};

export default localStorageUtils;
