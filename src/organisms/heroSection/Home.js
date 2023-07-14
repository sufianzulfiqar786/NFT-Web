import React from 'react';

// video
import AnimLandingPage from '../../assets/images/home/AnimLandingPage.gif';

// components
import Logo from '../../molecules/logo/Logo';
import MenuWrapper from '../../molecules/menuWrapper/MenuWrapper';
import FreeMinutes from '../../molecules/freeMinutes/FreeMinutes';
import VideoLoader from '../../atom/videoLoader/VideoLoader';

const HeroSection = ({ videoLoaded, setVideoLoaded }) => {

  return (
    <div className="relative">
      {!videoLoaded &&
        <VideoLoader />
      }
      <div className='w-full xl:h-[145vh]'>
        <img className={`w-full h-full object-cover ${videoLoaded ? '' : 'hidden'}`} src={AnimLandingPage} alt="animLandingage" onLoad={() => setVideoLoaded(true)} />
      </div>
      {videoLoaded && <div className={`absolute w-full top-[22%] ${videoLoaded ? '' : 'hidden'}`}>
        <div className='xl:mt-[-5%]'>
          <Logo width="30vw" fontSize="2.2vw" />
          <MenuWrapper />
          <FreeMinutes />
        </div>
      </div>}
    </div>
  );
};

export default HeroSection;
