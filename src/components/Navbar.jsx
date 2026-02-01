import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="CGA Logo" className="logo-image" />
        </div>

        {/* Desktop Links */}
        <div className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/services" className="link">Services</Link>
          <Link to="/colleges" className="link">Colleges</Link>
          <Link to="/apply" className="link">Apply</Link>
          <Link to="/contact" className="link">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>

      {/* ANNOUNCEMENT BAR (Gradient Style A) */}
      <div className="announcement-bar">
        <span>✨ Admissions Open for 2026 Batch – Enroll Now! ✨</span>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" className="mobile-link" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/colleges" className="mobile-link" onClick={() => setMenuOpen(false)}>Colleges</Link>
          <Link to="/apply" className="mobile-link" onClick={() => setMenuOpen(false)}>Apply</Link>
          <Link to="/contact" className="mobile-link" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
