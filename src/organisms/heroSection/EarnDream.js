import React, { useState } from 'react'

// video
import AnimPassiveIncome from "../../assets/images/home/AnimPassiveIncome.mp4";

// component
import VideoLoader from '../../atom/videoLoader/VideoLoader';

const HeroEarnDream = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    return (
        <div className="relative  ">
            {!videoLoaded &&
                <VideoLoader />
            }
            <video autoPlay muted loop src={AnimPassiveIncome}
                className={`w-full ${videoLoaded ? '' : 'hidden'}`}
                onLoadedData={() => setVideoLoaded(true)} />
            {videoLoaded && <div className="earn-dream-bg absolute w-full h-full top-[0%] flex justify-center items-center flex-col ">
                <p className='gradient-outline-brown-light mt-[50%] text-center text-[4.5vw] sm:text-[3vw] md:text-[5vw] font-upheaval hover:text-[white] tracking-[3px] leading-[18px] md:leading-[60px] 2xl:leading-[80%] transition ease-in-out duration-500'>
                    earn while <br /> <span className='gradient-outline-brown hover:text-[white] transition ease-in-out duration-500'>you dream</span>
                </p>
                <div className="flex justify-center border hover:border-2 border-[#00000000] rounded-xl text-white hover:text-[#fe9710] bg-[#00000077] hover:bg-[#000000af] w-[80%] sm:w-[76%] lg:w-[34%] text-center mt-2 md:mt-12 transition ease-in-out duration-1000">
                    <p className=' sm:text-[2vw] lg:text-[24px] 2xl:text-[34px] font-["VT323"] px-4 sm:px-7 py-3'>
                        Your Knight doesn’t just sit around in your wallet. Stake your NFT to receive all of the below:
                    </p>
                </div>
            </div>}
        </div>
    )
}

export default HeroEarnDream