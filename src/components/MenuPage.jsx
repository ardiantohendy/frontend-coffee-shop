import { useState, useEffect } from "react";
import "../style/MenuPage.css";
import { getMenuList } from "../api/Api";

const MenuPage = () => {
  const categories = ["Coffee-Based Drinks", "Non-Coffee Drinks", "Cold & Blended Drinks", "Food & Pastries"];

  const [activeCategory, setActiveCategory] = useState("Coffee-Based Drinks");

  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const result = await getMenuList();
    console.log(result);
    setMenuList(result);
  };

  return (
    <>
      <div className="menuPage">
        <div className="title">
          <p>CoffeePaste.'s Menu</p>
        </div>
        <div className="category-buttons">
          {categories.map((category) => (
            <button key={category} className={category === activeCategory ? "active" : ""} onClick={() => setActiveCategory(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="menuList">
          {menuList
            .filter((item) => item.category === activeCategory)
            .map((item) => (
              <div key={item.id} className="menuItem">
                <img src={item.image} alt={item.name} className="menuImage" />
                <div className="menuText">
                  <p className="title">{item.name}</p>
                  <p className="desc">{item.description}</p>
                  <p className="price">Rp {item.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MenuPage;
