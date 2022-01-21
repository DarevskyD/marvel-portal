import { Link, NavLink } from "react-router-dom";

import "./appHeader.scss";

const AppHeader = () => {
  return (
    <header className="app__header">
      <div className="wrapper app__header-wrapper">
        <h1 className="app__title">
          <Link to="/marvel-portal/">
            <span>Marvel</span> information portal
          </Link>
        </h1>
        <nav className="app__menu">
          <ul>
            <li>
              <NavLink
                to="/marvel-portal/"
                className={({ isActive }) => (isActive ? "active" : null)}
              >
                Characters
              </NavLink>
            </li>
            /
            <li>
              <NavLink
                to="/marvel-portal/comics"
                className={({ isActive }) => (isActive ? "active" : null)}
              >
                Comics
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
