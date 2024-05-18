import React from "react";
import promotion from "../assets/promotion.jpg";
import design from "../assets/design.png";
import "../index.css";

const Promotion = () => {
  return (
    <div className="relative">
      <img
        src={promotion}
        alt="Promotion"
        className="w-full h-64 md:h-96 lg:h-screen object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="absolute bottom-16 md:pt-0 pt-20 left-5 md:bottom-36 md:left-10 flex flex-col text-white p-4">
        <div className="flex items-center">
          <h1 className="text-md md:text-xl tracking-widest font-bold barlow-condensed-medium">
            FEEL THE JOY
          </h1>
          <img src={design} alt="Design" className="w-fit h-fit ml-4 md:ml-6" />
        </div>
        <p className="text-xl md:text-4xl lg:text-5xl tracking-wider mt-3 md:mt-5 gilda-display-regular">
          Book Hotel Rooms,
          <br /> Deals & Book Flights Online.
        </p>
        <button className="px-4 md:px-10 py-1 md:py-3 mt-6 md:mt-8 w-fit bg-transparent border-brown border-2 text-white outline-none hover:bg-brown transition-all">
          Enjoy it!
        </button>
      </div>
    </div>
  );
};

export default Promotion;
