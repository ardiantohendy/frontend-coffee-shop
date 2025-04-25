import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../api/Api";
import "../style/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      const response = await login(user);
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      console.log("Log in success");
      setUser({
        username: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      console.log("Full error response:", error.response.data);
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      } else {
        setErrors({ detail: "Something went wrong" });
      }
    }
  };

  return (
    <>
      <div className="loginPage">
        <div className="container">
          <p className="title">Welcome to CoffeePaste.</p>
          <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa delectus molestias explicabo enim sed distinctio voluptatibus inventore facere alias iusto.</p>
          <form onSubmit={handleSubmit}>
            <div className="username">
              <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} />
            </div>
            <div className="password">
              <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
              {errors.detail && <p className="error">{errors.detail}</p>}
            </div>
            <div className="buttons">
              <button type="submit">Log in</button>
              <button onClick={() => navigate("/")}>Log in as a guest</button>
            </div>
          </form>
          <p className="register">
            Do not have any account yet? <a onClick={() => navigate("/register")}>register</a> instead
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
