import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    history.replace("/login");
    dispatch({ type: types.logout });
  };
  return (
    <nav className="navbar-container">
      <Link className="nav-item" to="/">
        ALL
      </Link>

      <NavLink activeclassname="active" className="nav-item" exact to="/marvel">
        MARVEL
      </NavLink>

      <NavLink activeclassname="active" className="nav-item" exact to="/dc">
        DC
      </NavLink>

      <NavLink activeclassname="active" className="nav-item" exact to="/search">
        Search
      </NavLink>
      <button
        activeclassname="active"
        className="nav-item right logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>
      <span className="nav-item right">{user.name}</span>
    </nav>
  );
};
