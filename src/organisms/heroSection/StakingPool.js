import React from 'react'

// video
import StakingPoolAnimated from "../../assets/images/home/StakingPoolAnimated.gif";

// component
import VideoLoader from '../../atom/videoLoader/VideoLoader';

const HeroStakingPool = ({ videoLoaded, setVideoLoaded }) => {
    return (
        <div className="relative  ">
            {!videoLoaded &&
                <VideoLoader />
            }
            <div className='w-full xl:h-[120vh]'>
                <img className={`w-full h-full object-cover ${videoLoaded ? '' : 'hidden'}`} src={StakingPoolAnimated} alt="" onLoad={() => setVideoLoaded(true)} />
            </div>
            {videoLoaded && <div className="staking-pool-bg absolute w-full h-full top-[0%] flex justify-center items-center flex-col ">
                <p className='gradient-outline-brown-light mt-[50%] xl:mt-[40%] text-center text-[5vw] text-[5vw] font-upheaval hover:text-[white] tracking-[3px] leading-[23px] md:leading-[60px] 2xl:leading-[80%] transition ease-in-out duration-500'>
                    ENTER THE SACRED <br /> <span className='gradient-outline-brown hover:text-[white] transition ease-in-out duration-500'> STAKING POOLS</span>
                </p>
                <div className="flex justify-center border border-[#00000000]  text-white hover:text-[#fe9710] bg-[#00000077] hover:bg-[#000000af] w-[85%] sm:w-[76%] lg:w-[46%] text-center mt-2 md:mt-12 transition ease-in-out duration-1000">
                    <p className=' text-[2.5vw] lg:text-[24px] 2xl:text-[34px] font-["VT323"] px-5 sm:px-8 py-3'>
                        Commit to the Quest. Staking leads to greater demand, more value for you, passive income, and enriches our community
                    </p>
                </div>
            </div>}
        </div>
    )
}

export default HeroStakingPool