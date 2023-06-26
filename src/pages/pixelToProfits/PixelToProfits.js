import React, { useState } from 'react'

// video
import PixelToProfit from "../../assets/images/home/PixelToProfit.mp4";

// component
import VideoLoader from '../../atom/videoLoader/VideoLoader';

const PixelToProfits = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    return (
        <div className="relative  ">
            {!videoLoaded &&
                <VideoLoader />
            }
            <video autoPlay muted loop src={PixelToProfit}
                className={`w-full ${videoLoaded ? '' : 'hidden'}`}
                onLoadedData={() => setVideoLoaded(true)} />
           {videoLoaded && <div className="pixel-profit-bg absolute w-full h-full top-[0%] flex justify-center items-center flex-col ">
                <p className='gradient-outline-brown-light  text-center text-[3.5vw] md:text-[5vw] font-upheaval hover:text-[white] tracking-[3px] leading-[18px] md:leading-[60px] 2xl:leading-[80%] transition ease-in-out duration-500'>
                    From Pixels <br /> <span className='gradient-outline-brown hover:text-[white] transition ease-in-out duration-500'>to Profits</span>
                </p>
                <div className="flex justify-center border hover:border-2 border-[#00000000] text-white hover:text-[#fe9710] bg-[#00000077] hover:bg-[#000000af] rounded-xl w-[76%] lg:w-[36%] mt-2 md:mt-12 transition ease-in-out duration-1000">
                    <p className=' text-[2vw] lg:text-[24px] 2xl:text-[34px] font-["VT323"] px-4 py-3'>
                        Pixel Quest is the first play-to-mint. Earn gems by playing ETH & Arrow when it releases in 96 hours.
                        <br /> <br />
                        When P2E goes live after mint, you'll play for $ETH instead of gems. Players will be able to compete for either $20, $40, $80, or $320 in $ETH per round.
                    </p>
                </div>
            </div>}
        </div>
    )
}

export default PixelToProfits