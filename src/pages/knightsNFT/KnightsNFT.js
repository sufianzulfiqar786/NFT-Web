import React, { useState } from 'react'

// components
import HeroSectionKnightsNFT from '../../organisms/heroSection/KnightsNFT';
import MainSectionKnightsNFT from '../../organisms/mainSection/KnightsNFT';
import ScrollToTop from '../../atom/scrollToTop/ScrollToTop';

const KnightsNFT = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const scrollOffset = window.innerWidth >= 600 ? 7 : 0;
    return (
        <>
        {/* {videoLoaded && <ScrollToTop top={scrollOffset} />} */}
       <HeroSectionKnightsNFT videoLoaded={videoLoaded} setVideoLoaded={setVideoLoaded} />
       {videoLoaded && <MainSectionKnightsNFT/>}
        </>

    )
}

export default KnightsNFT