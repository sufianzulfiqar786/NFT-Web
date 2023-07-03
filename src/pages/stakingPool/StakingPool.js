import React, { useState } from 'react'

// components
import HeroStakingPool from '../../organisms/heroSection/StakingPool'
import MainStakingPool from '../../organisms/mainSection/StakingPool'
import ScrollToTop from '../../atom/scrollToTop/ScrollToTop';

const StakingPool = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const scrollOffset = window.innerWidth >= 600 ? 12 : 0;
    return (
        <>
        {/* {videoLoaded && <ScrollToTop top={scrollOffset}/>} */}
            <HeroStakingPool videoLoaded={videoLoaded} setVideoLoaded={setVideoLoaded} />
            {videoLoaded && <MainStakingPool />}
        </>
    )
}

export default StakingPool