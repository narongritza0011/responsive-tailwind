import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <div className=" bg-black">
        <Navbar />
        <Hero />
      </div>
      <Analytics />
      <div className=" bg-black">
        <Newsletter />
      </div>
      <Cards />

      <div className=" bg-black">
        <Footer />
      </div>
    </>
  );
}

export default App;
