import React from "react";
import Navbar from "../components/home-components/Navbar";
import NotFound from "./NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../components/home-components/Contact";
import Hero from "../components/home-components/Hero";
import Testimonial from "../components/home-components/Testimonial";
import Cta from "../components/home-components/Cta";
import About from "../components/home-components/About";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Testimonial /> */}
      <About />
      <Cta />
      <Contact />
    </>
  );
};

export default Home;
