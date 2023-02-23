import React from "react";
import "../styles/navbar.css";
import GetStartedBtn from "./GetStartedBtn";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-content container">
        <div className="navbar-logo">markall</div>
        <div className="navbar-menu">
          <a
            href="/"
            className="navbar-menu-link"
          >
            Services
          </a>
          <a
            href="/"
            className="navbar-menu-link"
          >
            Pricing
          </a>
          <a
            href="/"
            className="navbar-menu-link"
          >
            About Us
          </a>
        </div>
        <GetStartedBtn
          content={"get started"}
          customClass={"display-none"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
