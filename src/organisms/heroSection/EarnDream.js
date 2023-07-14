import React from 'react'

// video
import AnimPassiveIncome from "../../assets/images/home/AnimPassiveIncome.gif";

// component
import VideoLoader from '../../atom/videoLoader/VideoLoader';

const HeroEarnDream = ({videoLoaded, setVideoLoaded}) => {
    return (
        <div className="relative  ">
            {!videoLoaded &&
                <VideoLoader />
            }
                <div className='w-full xl:h-[100vh]'>
                <img className={`w-full h-full object-cover ${videoLoaded ? '' : 'hidden'}`} src={AnimPassiveIncome} alt="" onLoad={() => setVideoLoaded(true)} />
            </div>
            {videoLoaded && <div className="earn-dream-bg absolute w-full h-full top-[0%] flex justify-center items-center flex-col ">
                <p className='gradient-outline-brown-light mt-[44%] xl:mt-[25%] text-center text-[4.5vw] sm:text-[3vw] md:text-[5vw] font-upheaval hover:text-[white] tracking-[3px] leading-[18px] md:leading-[60px] 2xl:leading-[80%] transition ease-in-out duration-500'>
                    earn while <br /> <span className='gradient-outline-brown hover:text-[white] transition ease-in-out duration-500'>you dream</span>
                </p>
                <div className="flex justify-center border  border-[#00000000] rounded-xl text-white hover:text-[#fe9710] bg-[#00000077] hover:bg-[#000000af] w-[80%] sm:w-[76%] lg:w-[34%] text-center mt-2 md:mt-12 transition ease-in-out duration-1000">
                    <p className=' sm:text-[2vw] lg:text-[24px] 2xl:text-[34px] font-["VT323"] px-4 sm:px-7 py-3'>
                        Your Knight doesn’t just sit around in your wallet. Stake your NFT to receive all of the below:
                    </p>
                </div>
            </div>}
        </div>
    )
}

export default HeroEarnDream