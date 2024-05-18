import React from "react";
import Cardsservice from "../components/Cardsservice";
import roomservice from "../assets/room-service.png";
import swimmingpool from "../assets/swimming-pool.png";
import wifi from "../assets/wifi-router.png";
import parking from "../assets/parking-area.png";
import pickup from "../assets/pickup-truck.png";
import breakfast from "../assets/english-breakfast.png";
import design from "../assets/design.png";

const Services = () => {
  return (
    <>
      <div className="py-10" id="services">
        <div className="flex items-center justify-center">
          <img src={design} alt="" />
          <h2 className="barlow-condensed-thin font-bold text-gray-500 mx-3 text-2xl tracking-widest">
            KINGSUKH GUEST HOUSE
          </h2>
          <img src={design} alt="" />
        </div>
        <h1 className="gilda-display-regular flex justify-center text-3xl md:text-5xl my-5">
          Luxury Rooms & Suites
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <Cardsservice
          image={roomservice}
          heading="Room Service"
          description="Orci varius natoque penatibus magnis ders disney parturient ridiculu"
        />
        <Cardsservice
          image={swimmingpool}
          heading="Swimming pool"
          description="Orci varius natoque penatibus magnis ders disney parturient ridiculu"
        />
        <Cardsservice
          image={wifi}
          heading="Wifi-Facility"
          description="Orci varius natoque penatibus magnis ders disney parturient ridiculu"
        />
        <Cardsservice
          image={pickup}
          heading="Pickup & Drop"
          description="Orci varius natoque penatibus magnis ders disney parturient ridiculu"
        />
        <Cardsservice
          image={parking}
          heading="Parking"
          description="Orci varius natoque penatibus magnis ders disney parturient ridiculu"
        />
        <Cardsservice
          image={breakfast}
          heading="Breakfast"
          description="Orci varius natoque penatibus magnis ders disney parturient ridiculu"
        />
      </div>
    </>
  );
};

export default Services;
