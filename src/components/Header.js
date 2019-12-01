import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark mb-5">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Pets
          </Link>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HomePage
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favoriler">
                  Favoriler
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
