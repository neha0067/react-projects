import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link className="selected" to="/">
          <img src={logo} alt="Mix master logo" />
        </Link>

        <div className="categories">
          <Link className="selected" to="/">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/newsletter">Newsletter</Link>
        </div>
      </div>
    </nav>
  );
}
