import React, { useState } from 'react'
import HeroFirstPlay from '../../organisms/heroSection/FirstPlay'
import MainFirstPlay from '../../organisms/mainSection/FirstPlay'

const FirstPlay = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    return (
        <>
        <HeroFirstPlay videoLoaded={videoLoaded} setVideoLoaded={setVideoLoaded}/>
        {videoLoaded && <MainFirstPlay/>}
        </>
    )
}

export default FirstPlay