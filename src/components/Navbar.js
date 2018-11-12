import React from "react";
import "./Navbar.css";
import "../../node_modules/hamburgers/dist/hamburgers.css";

const hamburgerActivate = () => {
  var hamburger = document.querySelector(".hamburger");
  var checkNav = document.querySelector("#nav");
  
console.log(checkNav);
  hamburger.classList.toggle("is-active");
  if(hamburger.classList.contains("is-active")) {
    checkNav.checked = true;
  } else {
    checkNav.checked = false;
  }
};

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <input type="checkbox" id="nav" className="hidden" />
        <button
          className="hamburger hamburger--elastic"
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          onClick={hamburgerActivate}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <div className="logo">
          <a href="#">BRAND</a>
        </div>
        <div className="nav-wrapper">
          <ul>
            <li>
              <a href="#" className="navMenu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="navMenu-item">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="navMenu-item">
                Prices
              </a>
            </li>
            <li>
              <a href="#" className="navMenu-item">
                Purchase
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
