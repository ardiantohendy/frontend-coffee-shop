import "../style/LandingPage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { logout } from "../api/Api";

const LandingPage = () => {
  const categories = ["Belum Bayar", "Sudah Bayar"];
  const [activeCategory, setActiveCategory] = useState("Belum Bayar");
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleLogOut = async () => {
    try {
      await logout(localStorage.getItem("refresh"));
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      alert("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.log("Logout failed", error);
    }
  };

  return (
    <>
      <div className="landingPage">
        <div className="top">
          <header>
            <div className="logo">
              <p>CoffeePaste.</p>
            </div>
            <div className="headMenu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Menu</a>
                </li>
                <li>
                  <a href="#">Book</a>
                </li>
                {isAuthenticated ? (
                  <>
                    <li>
                      <button type="button" onClick={toggleCart}>
                        Cart
                      </button>
                    </li>
                    <li>
                      <button type="button" onClick={handleLogOut}>
                        Log out
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <button type="button" onClick={() => navigate("/login")}>
                        Log in
                      </button>
                    </li>
                    <li>
                      <button type="button" onClick={() => navigate("/register")}>
                        Sign up
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </header>
          <div className="content">
            <div className="left">
              <div className="title">
                <p>CoffeePaste.</p>
              </div>
              <div className="desc">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit ipsam eligendi, minima explicabo ab nesciunt officia repellendus saepe voluptatibus excepturi molestias atque commodi quam. Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Sed ipsum doloribus aliquid vero quibusdam accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, molestias.
                </p>
              </div>
              <div className="btn">
                <li>
                  <a href="#">Menu</a>
                </li>
                <li>
                  <a href="#">Book</a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className={`cart ${isCartOpen ? "open" : ""}`}>
          <button className="exit" type="button" onClick={toggleCart}>
            Exit
          </button>
          <div className="topCart">
            <p>Shopping Cart</p>
            <p>0 Item/s</p>
          </div>
          <div className="midCart">
            {categories.map((category) => (
              <button key={category} className={category === activeCategory ? "active" : ""} onClick={() => setActiveCategory(category)}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
