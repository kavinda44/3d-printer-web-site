import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../../App";

import { IoMdCart } from "react-icons/io";
import logo from "./logo.PNG";
import "./NavBar.css";

const NavBar = ({ toggleCartVisibility }) => {
  const {setAuthenticated} = useContext(Context);
  const [visible, setVisible] = useState(true);
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();

  const signout = async (e) => {
    e.preventDefault();
    const ress = await axios.post("/logout");
    if (ress.status === 200) {
      setAuthenticated(false);
      navigate("/");
    }
  };

  return (
    <header>
      <nav
        className={`${visible ? "visible" : "hidden"} ${
          isToggled && "navbar-bg-color"
        }`}
      >
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        {/* Main Nav */}
        <ul className="main-navbar">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/store"}>Store</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li>
            <Link to={"/product"}>Product</Link>
          </li>
          <li>
            <button className="btn" onClick={signout}>
              Sign Out
            </button>
          </li>
        </ul>
        {/* Mobile Nav Toggle Btn */}
        {isToggled ? (
          <button
            className="navbar-toggle-btn"
            onClick={() => {
              setIsToggled((prev) => !prev);
            }}
          >
            &#10005;
          </button>
        ) : (
          <button
            className="navbar-toggle-btn"
            onClick={() => {
              setIsToggled((prev) => !prev);
            }}
          >
            &#9776;
          </button>
        )}
        {/* Mobile Nav */}
        {isToggled && (
          <ul className="mobile-navbar navbar-bg-color">
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/store"}>Store</Link>
            </li>
            <li>
              <Link to={"/about"}>About us</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact us</Link>
            </li>
            <li>
              <button className="btn" onClick={signout}>
                Sign Out
              </button>
            </li>
          </ul>
        )}
      </nav>
      <div className="cart-icon" onClick={toggleCartVisibility}>
        <IoMdCart />
      </div>
    </header>
  );
};

export default NavBar;
