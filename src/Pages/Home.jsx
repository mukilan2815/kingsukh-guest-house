import React, { memo } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../assets/hut.jpg";
import slide2 from "../assets/hut2.jpg";
import slide3 from "../assets/hut3.jpg";
import Navbar from "../components/Navbar";
import "../index.css";

const Slide = memo(
  ({ backgroundColor, backgroundImage, title, subtitle, buttonText }) => (
    <div
      className="h-screen overflow-x-hidden"
      id="home"
      style={{
        backgroundColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="z-0"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <div className="z-10 px-8 flex-col justify-center items-center text-center">
        <h5 className="glida-display-regular mb-4 mt-8 text-white text-md md:text-xl lg:text-xl">
          {title}
        </h5>
        <h1 className="gilda-display-regular mt-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold  text-white opacity-100">
          {subtitle}
        </h1>
        <button className="gilda-display-regular text-white hover:bg-brown hover:border-brown border-2 bg-transparent p-2 md:p-3 mt-10 md:mt-14">
          {buttonText}
        </button>
      </div>
    </div>
  )
);

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <Carousel
        autoPlay
        infiniteLoop
        transitionTime={1000}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        stopOnHover={false}
      >
        <Slide
          backgroundColor="red"
          backgroundImage={slide1}
          title="UNIQUE PLACE IN INDIA"
          subtitle="LIFE ENJOY WITH THE GREAT MOMENTS"
          buttonText="BOOK ROOMS"
        />
        <Slide
          backgroundColor="blue"
          backgroundImage={slide2}
          title="FEEL THE REAL LUXURY"
          subtitle="LUXURY IS IN YOUR HAND"
          buttonText="TRY OUT LUXURY"
        />
        <Slide
          backgroundColor="green"
          backgroundImage={slide3}
          title="PRIVACY IS OUR PRIORITY"
          subtitle="PRIVATE PLACE FOR YOU"
          buttonText="BOOK ROOMS"
        />
      </Carousel>
    </div>
  );
}
