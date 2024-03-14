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

  setCompanionId: (companion_id) => {
    localStorage.setItem("companion_id", companion_id);
  },

  getCompanionId: () => {
    return localStorage.getItem("companion_id");
  },


  clearLocalStorage: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("companion_id");
  },
};

export default localStorageUtils;