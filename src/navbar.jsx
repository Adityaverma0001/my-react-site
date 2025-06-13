import { Link } from "react-router-dom";
import "./app.css";
import { useState } from "react";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="container-fluid position-relative p-0">
      <div className="flexx position-absolute">
        
        {/* LOGO + TOGGLE in one row */}
        <div className="top-bar">
          <img className="logo" src="bliize.svg" alt="Logo" />
          <button className="toggle-btn" onClick={() => setMenuOpen(!menuOpen)}>
  <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
</button>

        </div>

        {/* Navigation Menu */}
        <div className={`nav-menu ${menuOpen ? "show" : ""}`}>
          <ul className="flex">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pages">Pages</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Search + Button (hidden on mobile) */}
        <div className="flex1">
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div>
            <button type="button" className="button">Contact Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}



function Navbar1() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="container-fluid pre position-relative">
      <div className="position-absolute pae flexx">
        
        {/* LOGO + TOGGLE in one row */}
        <div className="top-bar">
          <img className="logo" src="bl.svg"alt="Logo" />
          <button className="toggle-btn toggle1" onClick={() => setMenuOpen(!menuOpen)}>
  <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
</button>

        </div>

        {/* Navigation Menu */}
        <div className={`nav-menu ${menuOpen ? "show" : ""}`} id="openn">
          <ul className="flex blr">
                        <li>
                           <Link to="/">Home</Link>
                        </li>
                        <li>
                           <Link to="/pages">Pages</Link>
                        </li>
                        <li>
                           <Link to="/project">Project</Link>
                        </li>
                        <li>
                           <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                           <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
        </div>

        {/* Search + Button (hidden on mobile) */}
        <div className="flex1">
                    <div className="search shr">
                       <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div>
                        <button type="button" className="button btnn">Contact Now</button>
                    </div>
               </div>
      </div>
    </section>
  );
}






export {Navbar ,Navbar1};