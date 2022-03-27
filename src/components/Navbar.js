import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brandname">
        The<span className="part">Cocktail</span>DB
      </div>
      <div className="pagelinks">
        <NavLink to={""} className="pagelink">
          home
        </NavLink>
        <NavLink to={"about"} className="pagelink">
          about
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
