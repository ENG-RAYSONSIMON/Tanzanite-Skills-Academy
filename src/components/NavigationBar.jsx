import { useState } from "react";

export default function NavigationBar({ theme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header"><nav className="container nav-wrap" aria-label="Main navigation">
      <a className="brand" href="#mwanzo" onClick={closeMenu} aria-label="Tanzanite Skills Academy home"><span className="brand-mark"><i /><b>TS</b></span><span className="brand-name">Tanzanite <strong>Skills Academy</strong></span></a>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}><a href="#mwanzo" onClick={closeMenu}>Mwanzo</a><a href="#programu" onClick={closeMenu}>Programu</a><a href="#kuhusu" onClick={closeMenu}>Kuhusu</a><a href="#ushuhuda" onClick={closeMenu}>Ushuhuda</a><a href="#mawasiliano" onClick={closeMenu}>Mawasiliano</a></div>
      <div className="nav-actions"><button className="theme-toggle" onClick={onThemeChange} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`} title="Badili mandhari"><span className="sun-icon">☀</span><span className="moon-icon">☾</span><i /></button><a className="button button-small" href="#mawasiliano">Jisajili <span>↗</span></a><button className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Open navigation"><i /><i /></button></div>
    </nav></header>
  );
}
