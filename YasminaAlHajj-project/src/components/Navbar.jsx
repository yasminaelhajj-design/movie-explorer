import { NavLink } from 'react-router-dom';
import React from "react";
export default function Navbar() {
  return (
    <header className="topbar">
      <div className="container nav">
        <NavLink to="/" className="logo">Cine<span>Scope</span></NavLink>
        <nav>
          <ul className="nav-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/movies">Movies</NavLink></li>
            <li><NavLink to="/categories">Categories</NavLink></li>
            <li><NavLink to="/favorites">Favorites</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
