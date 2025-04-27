import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

export const getMenuList = async () => {
  try {
    const menu = await axios.get(API_URL + "menu/get/");
    return menu.data;
  } catch (error) {
    console.error("Error getting menu list", error);
  }
};

export const login = async (userData) => {
  try {
    return await axios.post(API_URL + "users/login/", userData);
  } catch (error) {
    console.error("Error login " + error);
    throw error;
  }
};

export const logout = async (refreshToken) => {
  try {
    return await axios.post(API_URL + "users/logout/", { refresh: refreshToken });
  } catch (error) {
    console.error("Error", error);
  }
};

export const register = async (userData) => {
  try {
    return await axios.post(API_URL + "users/register/", userData);
  } catch (error) {
    console.error("Error register", error);
    throw error;
  }
};

export const order = async (orderData) => {
  try {
    return await axios.post(API_URL + "order/orders/", orderData);
  } catch (error) {
    console.error("Error order", error);
    throw error;
  }
};
