import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li className="nav-link">
        <NavLink to="/">New Project</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          MM
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
