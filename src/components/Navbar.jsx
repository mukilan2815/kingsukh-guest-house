import React, { useEffect, useState, useRef } from "react";
import "../index.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsOpen(false); 
    }
  };

  useEffect(() => {
    const menuItems = document.querySelectorAll(".menu-items a");
    menuItems.forEach((item) => {
      item.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      menuItems.forEach((item) => {
        item.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar-container m-2 z-40 flex justify-between items-center">
      <div className="vanity flex items-center cursor-pointer transition-all hover:text-brown">
        <img src={logo} alt="Kingsukh Logo" width={100} />
        <div>
          <span className="text-4xl"> Kingsukh </span>
          <br />{" "}
          <span className="text-sm font-light gilda-display-regular">
            GUEST HOUSE
          </span>
        </div>
      </div>
      <div className="menu hidden md:flex">
        <ul className="menu-items flex space-x-8">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#rooms">ROOMS</a>
          </li>
          <li>
            <a href="#gallery">GALLERY</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="book-now hidden md:block">
        <button className="btn-book-now">Book Now</button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>
      {isOpen && (
        <div
          className="absolute top-0 left-0 w-full h-full opacity-90 md:hidden"
          ref={menuRef}
        >
          <div className="menu-slide-in absolute top-0 pt-10 left-0 w-3/4 bg-white h-full z-10">
            <div className="flex justify-end">
              <button onClick={toggleMenu}>
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>
            <ul className="menu-items flex flex-col items-center space-y-6 py-4">
              <img src={logo} alt="" className="w-20 h-20" />
              <li>
                <a href="#home" onClick={() => setIsOpen(false)}>
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsOpen(false)}>
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setIsOpen(false)}>
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#rooms" onClick={() => setIsOpen(false)}>
                  ROOMS
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={() => setIsOpen(false)}>
                  GALLERY
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
