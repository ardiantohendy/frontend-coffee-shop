import "../style/LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
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
                <li>
                  <button type="button" onClick={() => navigate("/login")}>
                    Log in
                  </button>
                </li>
                <li>
                  <button type="button">Sign in</button>
                </li>
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
      </div>
    </>
  );
};

export default LandingPage;
