import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo">Shipping Box</div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="#">Home</a>
      </div>
    </nav>
  );
}
