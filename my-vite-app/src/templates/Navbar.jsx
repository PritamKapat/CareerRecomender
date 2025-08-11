import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="brand"><p>CareerWiz</p></div>
      
      {/* Desktop Navigation */}
      <div className="options">
        <button className="button-1">
          <Link to="/" className="nav-link">Home</Link>
        </button>
        <button className="button-1">
          <Link to="/profile" className="nav-link">Profile</Link>
        </button>
        <button className="button-1">
          <Link to="/saved" className="nav-link">SaveList</Link>
        </button>
        {token ? (
          <button className="button-1" style={{color:"white"}} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="button-1">
            <Link to="/login" className="nav-link">Login</Link>
          </button>
        )}
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="mobile-link" onClick={toggleMenu}>Home</Link>

        {token ? (
          <button className="mobile-link" onClick={() => { handleLogout(); toggleMenu(); }}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="mobile-link" onClick={toggleMenu}>Login</Link>
        )}

        <Link to="/profile" className="mobile-link" onClick={toggleMenu}>Profile</Link>
        <Link to="/saved" className="mobile-link" onClick={toggleMenu}>SaveList</Link>
      </div>
    </nav>
  );
};

export default Navbar;
