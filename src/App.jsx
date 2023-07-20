import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import What from "./components/WhatWeDo/What";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./index.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <What />
        <About />
        <Portfolio />
        <Contact />
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
