import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

export const getMenuList = async () => {
  try {
    const menu = await axios.get(API_URL + "menu/get/");
    return menu.data;
  } catch (e) {
    console.error("Error getting menu list", e);
  }
};

export const login = async (userData) => {
  try {
    return await axios.post(API_URL + "users/login/", userData);
  } catch (e) {
    console.error("Error login " + e);
  }
};
