import { Link } from 'react-router-dom';
import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>CineScope</h3>
          
        </div>
        <div>
          <h4>Pages</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/categories">Categories</Link></li>
          </ul>
        </div>
        <div>
          <h4>More</h4>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="container copyright">© 2026 CineScope.</div>
    </footer>
  );
}
