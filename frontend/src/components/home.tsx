import React from "react";
import AboutSection from "./about";
import Navigation from "./nav";
import Header from "./header";
import Footer from "./footer";
import Blog from "./blog";
import BandSection from "./band";

function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <Blog />
      <AboutSection />
      <BandSection />
      <Footer />
    </div>
  );
}

export default Home;
