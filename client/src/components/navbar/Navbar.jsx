import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Home</span>
        </Link>
        {user ? (
          <>
            <p id="logged-in-user">
              {user.username}
            </p>
            <button id="logout" className="navButton" onClick={() => handleLogout()}>
              Logout
            </button>
          </>
        ) : (
          <div className="navItems">
            <Link
              to="/register"
              id="registered-link-btn"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="navButton">Register</button>
            </Link>
            <Link
              to="/login"
              id="login-link-btn"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
