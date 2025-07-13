import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand"><p>CareerBuddy</p></div>
      <div className="options">
        <button className="button-1">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        </button>
        <button className="button-1">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>About</Link>
        </button>
        <button className="button-1">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Services</Link>
        </button>
        <button className="button-1">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
