import { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main">
      <div className="container-fluid flexx navbar">
        <div>
          <img className="camper" src="camper.png" alt="cam" />
        </div>

        {/* Hamburger button */}
        <div className="toggle-btn" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>

        {/* Menu Items */}
        <div className={`nav-items ${isOpen ? 'open' : ''}`}>
          <ul className="list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pages">Pages</Link></li>
            <li><Link to="/tourlist">Tour List</Link></li>
            <li><Link to="/toursearch">Tour Search</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="down">
            <div className="two">
            <div className="usd">
              <p>USD <i className="fa-solid fa-caret-down"></i></p>
            </div>
            <div className="login">
              <p>Login</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
