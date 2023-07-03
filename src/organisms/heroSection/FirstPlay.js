import React, { useState } from 'react'

// video
import AnimPlayGame from "../../assets/images/home/AnimPlayGame.gif";
import Timer from '../../atom/timer/Timer';
import VideoLoader from '../../atom/videoLoader/VideoLoader';

const HeroFirstPlay = ({videoLoaded, setVideoLoaded}) => {
    return (
        <div className="relative  ">
            {!videoLoaded &&
                <VideoLoader />
            }
            {/* <video controls={false} autoPlay muted loop src={AnimPlayGame}
                className={`w-full ${videoLoaded ? '' : 'hidden'}`}
                onLoadedData={() => setVideoLoaded(true)}
            /> */}
            <div className='w-full '>
                <img className={`w-full object-cover ${videoLoaded ? '' : 'hidden'}`} src={AnimPlayGame} alt="" onLoad={() => setVideoLoaded(true)} />
            </div>
            {videoLoaded && <div className="first-play-bg absolute w-full h-full top-[0%] flex justify-center items-center flex-col ">
                <p className='gradient-outline-brown-light mt-10 text-center text-[4.5vw] md:text-[5vw] font-upheaval hover:text-[white] tracking-[3px] leading-[18px] md:leading-[60px] 2xl:leading-[80%] transition ease-in-out duration-500'>
                    THE FIRST <br /> <span className='gradient-outline-brown hover:text-[white] transition ease-in-out duration-500'>PLAY-TO-MINT</span>
                </p>
                <div className="flex justify-center border border-[#00000000] text-white hover:text-[#fe9710] bg-[#00000077] hover:bg-[#000000af] w-[76%] lg:w-[40%] mt-2 md:mt-12 transition ease-in-out duration-1000">
                    <p className='text-[2.7vw] sm:text-[2vw] lg:text-[24px] 2xl:text-[34px] font-["VT323"] px-7 py-3'>
                        No applications. No grind. Pixel Quest rewards supporters and skill. All you need to do to be part of our free mint and P2E ecosystem is play ETH & Arrow. Win enough gems and you’ll receive a guaranteed Allowlist spot.
                    </p>
                </div>
                <div className="flex justify-center border border-[#00000000] text-white hover:text-[#fe9710] bg-[#00000077] hover:bg-[#000000af] w-[46%] lg:w-[40%] 2xl:w-[30%] mt-2 md:mt-12 transition ease-in-out duration-1000">
                    <p className=' text-[2vw] lg:text-[24px] 2xl:text-[34px] font-["VT323"] px-7 py-3'>
                        *Currently only available on Desktop
                    </p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className="gradient-outline-brown pt-4 md:pt-9 text-[3.5vw] md:text-[1.7vw] font-upheaval  tracking-[3px] hover:text-[white] transition ease-in-out duration-500">
                        GAME UNLOCKS IN
                    </p>
                    <Timer initialTime='40000' />
                </div>
            </div>}
        </div>
    )
}

export default HeroFirstPlay