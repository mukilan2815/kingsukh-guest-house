import React from "react";
import "../index.css";
import logo from "../assets/logo.png";
import { FaHome, FaBuilding, FaHotel, FaPhoneAlt } from "react-icons/fa";
import { MdContactEmergency } from "react-icons/md";
import { BsChatRightQuoteFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#222" }} className="text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="vanity flex items-center text-white cursor-pointer transition-all hover:text-brown mb-5">
            <img src={logo} alt="" width={100} />
            <div className="ml-3">
              <span className="text-4xl"> Kingsukh </span>
              <br /> <span className="barlow-condensed-thin">GUEST HOUSE</span>
            </div>
          </div>
          <p className="mt-5">
            Welcome to the best five-star deluxe hotel in New York. Hotel
            elementum sesue the aucan volutpat.
          </p>
        </div>
        <div>
          <h1 className="text-xl gilda-display-regular mb-5">Service Links</h1>
          <div className="flex items-center space-x-3 my-2">
            <FaHome />
            <p className="hover:underline underline-offset-4 decoration-brown transition-all">
              Home
            </p>
          </div>
          <div className="flex items-center space-x-3 my-2">
            <FaBuilding />
            <p className="hover:underline underline-offset-4 decoration-brown transition-all">
              About
            </p>
          </div>
          <div className="flex items-center space-x-3 my-2">
            <BsChatRightQuoteFill />
            <p className="hover:underline underline-offset-4 decoration-brown transition-all">
              Service
            </p>
          </div>
          <div className="flex items-center space-x-3 my-2">
            <FaHotel />
            <p className="hover:underline underline-offset-4 decoration-brown transition-all">
              Room
            </p>
          </div>
          <div className="flex items-center space-x-3 my-2">
            <MdContactEmergency />
            <p className="hover:underline underline-offset-4 decoration-brown transition-all">
              Gallery
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-xl gilda-display-regular mb-5">Information</h1>
          <div className="flex items-center my-2">
            <FaPhoneAlt />
            <p className="ml-3">
              1800-121-3637
              <br />
              +91-7052-101-786
            </p>
          </div>
          <div className="flex items-center my-2">
            <IoMail />
            <p className="ml-3">info@example.com</p>
          </div>
          <div className="flex items-center my-2">
            <CiLocationOn />
            <p className="ml-3">
              1247/Plot No. 39, 15th Phase,
              <br /> United States of America
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-xl gilda-display-regular mb-5">Newsletter</h1>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded mb-2 text-black"
            />
            <button className="bg-brown text-white p-2 rounded transition-all hover:bg-white hover:text-brown">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p>*All images used here is for demo purposes</p>
    </div>
  );
};

export default Footer;
