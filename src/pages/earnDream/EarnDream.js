import React, { useState } from "react";

// components
import HeroEarnDream from "../../organisms/heroSection/EarnDream";
import MainEarnDream from "../../organisms/mainSection/EarnDream";

const EarnDream = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  return (
    <>
      <HeroEarnDream
        videoLoaded={videoLoaded}
        setVideoLoaded={setVideoLoaded}
      />
      {videoLoaded && <MainEarnDream />}
    </>
  );
};

export default EarnDream;
