import React from "react";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="navbar-container m-5 mx-24 z-40">
      <div className="vanity cursor-pointer transition-all hover:text-brown hover:font-bold">
        <span className="text-4xl"> Kingsukh </span>
        <br /> <span className="barlow-condensed-thin">GUEST HOUSE</span>
      </div>
      <div className="menu">
        <ul className="menu-items">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>ROOMS</li>
          <li>GALLERY</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="book-now">
        <button className="btn-book-now">Book Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
