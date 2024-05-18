import React from "react";
import "../index.css";
import left from "../assets/aboutus2.jpg";
import design from "../assets/design.png";
import aboutus2 from "../assets/aboutus4.jpg";
import logo from "../assets/logo.png";
import floorlight from "../assets/floor-lamp.png";
import swim from "../assets/swimming-pool.png";

const Aboutus = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row h-auto md:h-screen justify-between pb-20 md:mr-52 flaticon-light overflow-x-hidden"
    >
      <div className="left w-full md:w-1/2 lg:w-1/3 md:ml-20 relative flex justify-center items-center">
        <img src={left} alt="Left" className="w-full md:w-2/3 lg:w-3/4 mx-10" />
        <img
          src={aboutus2}
          alt="About us"
          className="absolute bottom-0 left-0 md:left-10 border-white border-4 md:border-8 w-2/5 md:w-1/2 h-2/5 md:h-1/2"
        />
        <div className="bg-black text-white p-3 text-center absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 md:h-16 md:w-16 mx-auto"
          />
          <h5 className="gilda-display-regular text-lg md:text-xl">
            LUXURY ROOMS
          </h5>
        </div>
      </div>

      <div className="right w-full md:w-1/2 lg:w-1/3 p-6">
        <div className="flex items-center">
          <h3 className="barlow-condensed font-thin text-xl">
            KINGSUKH LUXURY HOTEL
          </h3>
          <img src={design} alt="Design" className="w-fit h-fit ml-3" />
        </div>
        <h1 className="gilda-display-regular text-3xl md:text-5xl my-4 font-bold">
          Most Safe & Rated Hotel in London.
        </h1>
        <h5 className="barlow-condensed-thin text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          facere saepe, perspiciatis velit quam in repellendus possimus? Debitis
          consequatur quas, vero sint expedita, possimus inventore recusandae,
          fugiat at aliquam modi!
        </h5>
        <div className="flex flex-col md:flex-row items-center md:items-center my-6 space-y-6 md:space-y-0 md:space-x-10">
          <div className="flex items-center">
            <img src={floorlight} alt="Lighting" className="w-10 h-10" />
            <h1 className="gilda-display-regular text-lg md:text-xl ml-3">
              The Best Lighting
            </h1>
          </div>
          <div className="flex items-center">
            <img src={swim} alt="Swimming" className="w-12 h-12" />
            <h1 className="gilda-display-regular text-lg md:text-xl ml-3">
              The Best Swimming
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-center space-y-6 md:space-y-0 md:space-x-10">
          <button className="bg-brown px-7 py-4 text-white">
            Discover More
          </button>
          <div className="flex items-center">
            <div>
              <h3 className="font-thin">Book Now</h3>
              <h1>7448359935</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
