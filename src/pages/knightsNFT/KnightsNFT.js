import React, { useState } from 'react'

// components
import HeroSectionKnightsNFT from '../../organisms/heroSection/KnightsNFT';
import MainSectionKnightsNFT from '../../organisms/mainSection/KnightsNFT';

const KnightsNFT = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    return (
        <>
            <HeroSectionKnightsNFT videoLoaded={videoLoaded} setVideoLoaded={setVideoLoaded} />
            {videoLoaded && <MainSectionKnightsNFT />}
        </>

    )
}

export default KnightsNFT