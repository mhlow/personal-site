import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navHeader">
            <NavLink to="/personal-site/" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>Home</NavLink>
        </div>
        <div className="navFooter">
            <NavLink to="/personal-site/goals" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>Goals</NavLink>
            <NavLink to="/personal-site/ctf-notes" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>CTF Notes</NavLink>
        </div>
    </nav>
  );
}

export default Navbar;