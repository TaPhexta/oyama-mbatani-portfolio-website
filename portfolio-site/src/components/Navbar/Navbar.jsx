import { NavLink } from "react-router-dom";

import navigation from "../../data/navigation.json";

import site from "../../data/site.json"

import "./Navbar.css";

function Navbar() {
  return (
    <header id="header" className="header">
      <nav id="navbar" className="navbar">
        <div className="navbar-logo">
          <NavLink to="/" className="logo-link">
            {site.siteLogo}
          </NavLink>
        </div>

        <ul className="navbar-links">
          {navigation.map((item) => (
            <li key={item.id} className="navbar-item">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
