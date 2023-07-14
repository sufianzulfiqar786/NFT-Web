import React, { useState } from "react";
import HeroSection from "../../organisms/heroSection/Home";
import MainSection from "../../organisms/mainSection/Home";

const Home = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  return (
    <>
      <HeroSection videoLoaded={videoLoaded} setVideoLoaded={setVideoLoaded} />
      {videoLoaded && <MainSection />}
    </>
  );
};

export default Home;
