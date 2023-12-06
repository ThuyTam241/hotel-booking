import axios from "axios";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    phone: undefined,
    country: undefined,
    email: undefined,
    city: undefined
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const isRegisterMode = location.pathname.endsWith("/register");

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const loginUser = async () => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  }

  const registerUser = async () => {
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post("/auth/register", credentials);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
      navigate("/login");
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }
  }

  const handleClick = async (e) => {
    e.preventDefault();
    if (isRegisterMode) {
      registerUser();
    } else {
      loginUser();
    }
    
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        {isRegisterMode && (
          <>
            <input
              type="text"
              placeholder="email"
              id="email"
              onChange={handleChange}
              className="lInput"
            />
            <input
              type="text"
              placeholder="phone"
              id="phone"
              onChange={handleChange}
              className="lInput"
            />
            <input
              type="text"
              placeholder="country"
              id="country"
              onChange={handleChange}
              className="lInput"
            />
            <input
              type="text"
              placeholder="city"
              id="city"
              onChange={handleChange}
              className="lInput"
            />
          </>
        )}
        <button id="login-form-submit" disabled={loading} onClick={handleClick} className="lButton">
          {isRegisterMode ? 'Register' : 'Login'}
        </button>
        {error && <span id="error-message">{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
