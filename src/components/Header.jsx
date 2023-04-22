import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="navigation-menu">
        <NavLink to="/" className="navigation-link">
          Home
        </NavLink>

        <NavLink to="/contact" className="navigation-link">
          Contact
        </NavLink>

        <NavLink to="/help" className="navigation-link">
          Help
        </NavLink>
      </nav>
    </header>
  );
}
