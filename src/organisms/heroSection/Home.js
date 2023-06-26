import React, { useEffect, useState } from 'react';

// video
import AnimLandingPage from '../../assets/images/home/AnimLandingPage.mp4';

// components
import Logo from '../../molecules/logo/Logo';
import MenuWrapper from '../../molecules/menuWrapper/MenuWrapper';
import FreeMinutes from '../../molecules/freeMinutes/FreeMinutes';
import VideoLoader from '../../atom/videoLoader/VideoLoader';

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative">
      {!videoLoaded &&
        <VideoLoader />
      }
      <video autoPlay muted loop src={AnimLandingPage}
        className={`w-full ${videoLoaded ? '' : 'hidden'}`}
        onLoadedData={() => setVideoLoaded(true)}
      />
      {videoLoaded && <div className={`absolute w-full top-[22%] ${videoLoaded ? '' : 'hidden'}`}>
        <div>
          <Logo width="30vw" fontSize="2.2vw" />
          <MenuWrapper />
          <FreeMinutes />
        </div>
      </div>}
    </div>
  );
};

export default HeroSection;
