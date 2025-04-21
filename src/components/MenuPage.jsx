import { useState } from "react";
import "../style/MenuPage.css";

const MenuPage = () => {
  const categories = ["Coffee-Based Drinks", "Non-Coffee Drinks", "Cold & Blended Drinks", "Food & Pastries"];

  const [activeCategory, setActiveCategory] = useState("Coffee-Based Drinks");

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
      </div>
    </>
  );
};

export default MenuPage;
