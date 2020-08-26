import React from "react";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <a href="#" className="navbar-brand">
        Brand
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav">
          <a href="#" className="nav-item nav-link active">
            Home
          </a>
          <a href="#" className="nav-item nav-link">
            Profile
          </a>
          <a href="#" className="nav-item nav-link">
            Messages
          </a>
          <a href="#" className="nav-item nav-link disabled">
            Reports
          </a>
        </div>
        <div className="navbar-nav ml-auto">
          <a href="#" className="nav-item nav-link">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
