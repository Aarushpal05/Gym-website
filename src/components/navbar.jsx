import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import { FaDumbbell } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaDumbbell className="logo-icon" />
        <span> AYUSH FITNESS </span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/trainers">Trainers</Link></li>
        <li><Link to="/plans">Plans</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <button className="membership-btn">
      <a href="/contact">Join Now</a>
      </button>
    </nav>
  );
}

export default Navbar;
