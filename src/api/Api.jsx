import axios from "axios";

export const getMenuList = async () => {
  try {
    const menu = await axios.get("http://127.0.0.1:8000/api/menu/get/");
    return menu.data;
  } catch (e) {
    console.error("Error getting menu list", e);
  }
};
