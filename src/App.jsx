import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/about";
import What from "./components/WhatWeDo/What";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./index.css";
import { useEffect, useState } from "react";
import Loader from "./utils/Loader/Loader";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // window.addEventListener("test" , () => {
    setTimeout(() => {
      setIsLoaded(true);
    console.log("loaded");
    }, "2000");
    
  // });
  return (
    <>
      {!isLoaded ? (
        <Loader />
      ) : (
        <>
          <BrowserRouter>
            <Navbar />
            <Hero />
            <What />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
          </BrowserRouter>
        </>
      )}
    </>
    // <>
    // <BrowserRouter>
    //   <Navbar />
    //   <Hero />
    //   <What />
    //   <About />
    //   <Portfolio />
    //   <Contact />
    //   <Footer />
    // </BrowserRouter>
    // </>
  );
}

export default App;
