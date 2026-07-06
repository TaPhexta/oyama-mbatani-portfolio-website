import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header id="navbar" className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/">Oyama Mbatani</NavLink>
        </div>

        <nav id="navbar-navigation" className="navbar-navigation">
          <ul className="navbar-list">
            <li className="navbar-item">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="navbar-item">
              <NavLink to="/about">About</NavLink>
            </li>

            <li className="navbar-item">
              <NavLink to="/projects">Projects</NavLink>
            </li>

            <li className="navbar-item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
// Creates a navigation bar component that can be used throughout the application.
// It uses the NavLink component from react-router-dom to create navigation links to different pages of the application. 
// The navigation bar is styled using an external CSS file.
export default Navbar;
