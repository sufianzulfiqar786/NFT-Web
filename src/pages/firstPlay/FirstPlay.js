import React, { useState } from 'react'
import HeroFirstPlay from '../../organisms/heroSection/FirstPlay'
import MainFirstPlay from '../../organisms/mainSection/FirstPlay'
import ScrollToTop from '../../atom/scrollToTop/ScrollToTop';

const FirstPlay = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const scrollOffset = window.innerWidth >= 600 ? 13 : 0;
    return (
        <>
        {/* <ScrollToTop top={scrollOffset}/> */}
        <HeroFirstPlay videoLoaded={videoLoaded} setVideoLoaded={setVideoLoaded}/>
        {videoLoaded && <MainFirstPlay/>}
        </>
    )
}

export default FirstPlay