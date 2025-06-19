import React from "react";
import "./Navbar.css";
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import { handleTheme } from "../../Store/counterSlice";
import { useSelector, useDispatch } from "react-redux";
const Navbar = () => {
  //  const toggle_mode = () => {
  //  theme == "light" ? setTheme("dark") : setTheme("light");   original
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <img
        src={theme === "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img
          src={theme == "light" ? search_icon_light : search_icon_dark}
          alt=""
        />
      </div>
      <img
        src={theme === "light" ? toggle_light : toggle_dark}
        alt=""
        className="toggle-icon"
        onClick={() => dispatch(handleTheme())}
      />
    </div>
  );
};

export default Navbar;
