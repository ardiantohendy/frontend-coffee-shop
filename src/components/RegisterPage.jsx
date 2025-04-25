import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../api/Api";
import "../style/RegisterPage.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", email: "", password: "", password2: "" });
  const [errors, setErrors] = useState({});

  const handleChange = async (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      await register(user);
      alert("Registration success");
      setUser({
        username: "",
        email: "",
        password: "",
        password2: "",
      });
      navigate("/login");
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
      <div className="registerPage">
        <div className="container">
          <p className="title">Welcome to CoffeePaste.</p>
          <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa delectus molestias explicabo enim sed distinctio voluptatibus inventore facere alias iusto.</p>
          <form onSubmit={handleSubmit}>
            <div className="username">
              <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} />
              {errors.username && <p className="error">{errors.username[0]}</p>}
            </div>
            <div className="email">
              <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
              {errors.email && <p className="error">{errors.email[0]}</p>}
            </div>
            <div className="password">
              <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
              {errors.password && <p className="error">{errors.password[0]}</p>}
            </div>
            <div className="password2">
              <input type="password" name="password2" placeholder="Password2" value={user.password2} onChange={handleChange} />
              {errors.password2 && <p className="error">{errors.password2[0]}</p>}
            </div>
            <div className="buttons">
              <button type="submit">Sign Up</button>
              <button onClick={() => navigate("/")}>Log in as a guest</button>
            </div>
          </form>
          <p className="login">
            Do have any account yet? <a onClick={() => navigate("/login")}>log in</a> instead
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
