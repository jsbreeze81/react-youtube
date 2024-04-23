import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <h1 className="header__logo">
      <Link to="/">
        <em aria-hidden="true"></em>
        <span>
          webs
          <br />
          youtube
        </span>
      </Link>
    </h1>
  );
}

export default Logo;
