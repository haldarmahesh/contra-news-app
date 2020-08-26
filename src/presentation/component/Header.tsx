import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [searchKey, setSearchKey] = useState("");
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <NavLink to="/">
        <span className="navbar-brand">Contra Newss</span>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink
              to="/headlines"
              activeClassName="active"
              className="nav-link"
            >
              Headlines <span className="sr-only">(current)</span>
            </NavLink>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            onChange={(event) => setSearchKey(event.target.value)}
          />
          <Link to={`/search/${searchKey}`}>
            <button className="btn btn-outline-success my-2 my-sm-0">
              Search
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
