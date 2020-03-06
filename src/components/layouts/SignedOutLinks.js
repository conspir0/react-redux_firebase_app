import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li className="nav-link">
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/signin">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
