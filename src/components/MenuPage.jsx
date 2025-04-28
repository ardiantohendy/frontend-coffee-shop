import { useState, useEffect } from "react";
import "../style/MenuPage.css";
import { getMenuList } from "../api/Api";

const MenuPage = () => {
  const categories = ["Coffee-Based Drinks", "Non-Coffee Drinks", "Cold & Blended Drinks", "Food & Pastries"];
  const [activeCategory, setActiveCategory] = useState("Coffee-Based Drinks");
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuList, setMenuList] = useState([]);
  const [quantity, setQuantity] = useState(1);

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
        <div className="outerMenu">
          <div className="menuList">
            {menuList
              .filter((item) => item.category === activeCategory)
              .map((item) => (
                <div key={item.id} className="menuItem" onClick={() => setSelectedItem(item)}>
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

        {selectedItem && (
          <div
            className="popup-overlay"
            onClick={() => {
              setSelectedItem(null);
              setQuantity(1);
            }}
          >
            <div className="popup" onClick={(e) => e.stopPropagation()}>
              <img src={selectedItem.image} alt={selectedItem.name} className="popup-image" />
              <div className="menuTextSelected">
                <p className="title">{selectedItem.name}</p>
                <p className="desc">{selectedItem.description}</p>
              </div>
              <div className="quantity-wrapper">
                <input type="number" id="quantity" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
                <p className="price">Rp. {selectedItem.price * quantity}</p>
              </div>

              <button
                className="add-to-cart"
                onClick={() => {
                  console.log("Tambahkan ke keranjang:", selectedItem, "Jumlah:", quantity);
                  // Tambahkan logika cart di sini nanti
                }}
              >
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MenuPage;
