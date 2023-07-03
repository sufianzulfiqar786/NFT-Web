import React, { useState } from 'react'

// components
import HeroEarnDream from '../../organisms/heroSection/EarnDream'
import MainEarnDream from '../../organisms/mainSection/EarnDream'
import ScrollToTop from '../../atom/scrollToTop/ScrollToTop';

const EarnDream = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const scrollOffset = window.innerWidth >= 600 ? 14 : 0;
  return (
   <>
   {/* { videoLoaded && <ScrollToTop top={scrollOffset}/>} */}
   <HeroEarnDream videoLoaded={videoLoaded} setVideoLoaded={setVideoLoaded}/>
   {videoLoaded && <MainEarnDream/>}
   </>
  )
}

export default EarnDream