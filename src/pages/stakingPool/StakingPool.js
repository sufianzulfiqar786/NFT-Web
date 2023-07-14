import React, { useState } from 'react'

// components
import HeroStakingPool from '../../organisms/heroSection/StakingPool'
import MainStakingPool from '../../organisms/mainSection/StakingPool'

const StakingPool = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    return (
        <>
            <HeroStakingPool videoLoaded={videoLoaded} setVideoLoaded={setVideoLoaded} />
            {videoLoaded && <MainStakingPool />}
        </>
    )
}

export default StakingPool