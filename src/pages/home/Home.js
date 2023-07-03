import React, { useState } from "react";
import HeroSection from "../../organisms/heroSection/Home";
import MainSection from "../../organisms/mainSection/Home";
import ScrollToTop from "../../atom/scrollToTop/ScrollToTop";

const Home = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const scrollOffset = window.innerWidth >= 600 ? 11 : 0;
  return (
    <>
    {/* {videoLoaded && <ScrollToTop top={scrollOffset}/>} */}
    <HeroSection videoLoaded={videoLoaded} setVideoLoaded={setVideoLoaded}/>
     {videoLoaded && <MainSection/>}
    </>
  );
};

export default Home;
