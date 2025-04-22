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
        <div className="menu-list">
          {menuList // filter berdasarkan kategori aktif
            .map((item) => (
              <div key={item.id} className="menu-item">
                <img src={item.image} alt={item.name} className="menu-image" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Rp {item.price}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MenuPage;
