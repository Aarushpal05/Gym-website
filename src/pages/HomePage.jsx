import React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import WhyChooseme from "../components/whychooseme";
import Programs from "../components/program";
import Trainers from "../components/trainer";
import Pricing from "../components/pricing";
import Contact from "../components/contact";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseme />
      <Programs />
      <Trainers />
      <Pricing />
      <Contact />
    </>
  );
}

export default HomePage;
