import React from "react";
import Intro from "../intro/Intro";
import About from "../home/About";
import Faq from "../home/Faq";
import Reviews from "../home/Reviews";

function HomePage(props) {
  return (
    <>
      <Intro />
      <About />
      <Faq />
      <Reviews />
    </>
  );
}

export default HomePage;
