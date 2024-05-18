import React from "react";
import design from "../assets/design.png";
import room1 from "../assets/rooms1.jpg";
import room2 from "../assets/rooms2.jpeg";
import room3 from "../assets/rooms3.jpg";
import room4 from "../assets/rooms4.jpg";
import room5 from "../assets/rooms5.jpg";

import "../index.css";

const Rooms = () => {
  return (
    <div
      id="rooms"
      className="py-16 bg-pink-50 flex flex-col items-center justify-center"
    >
      <div className="flex items-center justify-center">
        <img src={design} alt="" />
        <h2 className="barlow-condensed-thin font-bold text-gray-500 mx-3 text-2xl tracking-widest">
          KINGSUKH GUEST HOUSE
        </h2>
        <img src={design} alt="" />
      </div>
      <h1 className="gilda-display-regular text-5xl mt-8">
        Luxury Rooms & Suites
      </h1>

      <div className="flex mt-8">
        <div className="room-container">
          <img src={room1} alt="" className="room-image" />
          <div className="room-overlay">
            <div className="text-lg ">Junior Suite</div>
            <div className="text-lg">500/Night</div>
          </div>
        </div>
        <div className="room-container">
          <img src={room2} alt="" className="room-image" />
          <div className="room-overlay">
            <div className="text-lg ">Family Room</div>
            <div className="text-lg">800/Night</div>
          </div>
        </div>
      </div>
      <div className="flex mt-10">
        <div className="room-container">
          <img src={room3} alt="" className="room-image" />
          <div className="room-overlay">
            <div className="text-lg ">Family Room</div>
            <div className="text-lg">800/Night</div>
          </div>
        </div>
        <div className="room-container">
          <img src={room4} alt="" className="room-image" />
          <div className="room-overlay">
            <div className="text-lg ">Family Room</div>
            <div className="text-lg">800/Night</div>
          </div>
        </div>
        <div className="room-container">
          <img src={room5} alt="" className="room-image" />
          <div className="room-overlay">
            <div className="text-lg ">Family Room</div>
            <div className="text-lg">800/Night</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
