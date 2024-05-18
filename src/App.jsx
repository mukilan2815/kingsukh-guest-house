import Aboutus from "./Pages/Aboutus";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Promotion from "./Pages/Promotion";
import Rooms from "./Pages/Rooms";
import Services from "./Pages/Services";
function App() {
  return (
    <div className="overflow-x-hidden">
      <Home />
      <Aboutus />
      <Rooms />
      <Services />
      <Promotion />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
