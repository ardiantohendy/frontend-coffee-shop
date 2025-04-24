import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import "../style/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  //   const [user, setUser] = useState({ username: "", password: "" });

  return (
    <>
      <div className="loginPage">
        <div className="container">
          <p className="title">Welcome to CoffeePaste.</p>
          <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa delectus molestias explicabo enim sed distinctio voluptatibus inventore facere alias iusto.</p>
          <form action="">
            <div className="username">
              {/* <label>Username:</label> */}
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="password">
              {/* <label>Password:</label> */}
              <input type="text" name="password" placeholder="Password" />
            </div>
            <div className="buttons">
              <button type="submit">Log in</button>
              <button onClick={() => navigate("/")}>Log in as a guest</button>
            </div>
          </form>
          <p className="register">
            Do not have any account yet? <a href="#">register</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
