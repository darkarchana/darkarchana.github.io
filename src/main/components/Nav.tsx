import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link className="link" to="/">
        <h2>Logo</h2>
      </Link>
      <ul>
        <Link className="link" to="/test">
          <li>Test</li>
        </Link>
        <Link className="link" to="/chapter">
          <li>Chapter</li>
        </Link>
        <Link className="link" to="/about">
          <li>About</li>
        </Link>
        <Link className="link" to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
