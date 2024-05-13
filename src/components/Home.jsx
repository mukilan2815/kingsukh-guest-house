import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../assets/bed2.avif";
import slide2 from "../assets/bed.avif";
import slide3 from "../assets/bed3.jpg";
import Navbar from "../components/Navbar";
import logo from "../assets/logo.webp";
import "../index.css";
export default function Home() {
  return (
    <div className="h-screen w-screen flex overflow-x-hidden justify-center items-center">
      <Navbar />
      <Carousel
        autoPlay
        infiniteLoop
        transitionTime={2000}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        stopOnHover={false}
      >
        <div
          className="h-screen"
          style={{
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            backgroundImage: `url(${slide1})`,
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
          <div className="z-10 w-1/2 flex-col justify-center items-center">
            <h5 className="glida-display-regular mb-6 mt-10 text-white">
              UNIQUE PLACE IN INDIA
            </h5>
            <h1 className="gilda-display-regular mt-3  text-7xl font-bold text-white opacity-100">
              LIFE ENJOY WITH THE GREAT MOMENTS
            </h1>
            <button className="gilda-display-regular text-white hover:bg-brown hover:border-brown border-2 bg-transparent p-3 mt-14">
              BOOK ROOMS
            </button>
          </div>
        </div>

        <div
          className="h-screen"
          style={{
            backgroundColor: "blue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            backgroundImage: `url(${slide2})`,
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
          <div className="z-10 w-1/2 flex-col justify-center items-center">
            <h5 className="glida-display-regular mb-6 mt-10 text-white">
              FEEL THE REAL LUXURY
            </h5>
            <h1 className="gilda-display-regular mt-3  text-7xl font-bold text-white opacity-100">
              LUXURY IS IN YOUR HAND
            </h1>
            <button className="gilda-display-regular text-white hover:bg-brown hover:border-brown border-2 bg-transparent p-3 mt-14">
              TRY OUT LUXURY
            </button>
          </div>
        </div>

        <div
          className="h-screen"
          style={{
            backgroundColor: "green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            backgroundImage: `url(${slide3})`,
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
          <div className="z-10 w-1/2 flex-col justify-center items-center">
            <h5 className="glida-display-regular mb-6 mt-10 text-white">
              PRIVACY IS OUR PRIORITY
            </h5>
            <h1 className="gilda-display-regular mt-3  text-7xl font-bold text-white opacity-100">
              PRIVATE PLACE FOR YOU
            </h1>
            <button className="gilda-display-regular text-white hover:bg-brown hover:border-brown border-2 bg-transparent p-3 mt-14">
              BOOK ROOMS
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
