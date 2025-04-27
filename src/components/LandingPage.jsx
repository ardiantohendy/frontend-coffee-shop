import "../style/LandingPage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { logout } from "../api/Api";

const LandingPage = () => {
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
                      <button type="button">Cart</button>
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
        <div className="cart">
          <h1>THIS IS A SHOPPING CART</h1>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
