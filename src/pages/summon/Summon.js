import React, { useState } from 'react'

// video
import SummonVideo from "../../assets/images/home/Summon.gif";

// component
import VideoLoader from '../../atom/videoLoader/VideoLoader';

const Summon = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    return (
        <div className="relative">
            {!videoLoaded &&
                <VideoLoader />
            }
            <div className='w-full xl:h-[110vh]'>
                <img className={`w-full h-full object-cover ${videoLoaded ? '' : 'hidden'}`} src={SummonVideo} alt="" onLoad={() => setVideoLoaded(true)} />
            </div>
            {videoLoaded && <div className="summon-bg absolute w-full h-full top-[0%] flex justify-center items-center flex-col ">
                <p className='gradient-outline-brown-light mt-[36%] xl:mt-[27%] text-center text-[4vw] md:text-[5vw] font-upheaval hover:text-[white] tracking-[3px] leading-[28px] md:leading-[60px] 2xl:leading-[80%] transition ease-in-out duration-500'>
                    SUMMON YOUR  <br /> <span className='gradient-outline-brown hover:text-[white] transition ease-in-out duration-500'>KNIGHT</span>
                </p>
                <div className="flex justify-center flex-col items-center md:flex-row  border hover:border-2 border-[#00000000] font-['VT323'] text-[0.8em] xl:text-[24px] 2xl:text-[1.7em] rounded-xl w-[76%]  lg:w-[36%] mt-2 md:mt-12">
                    <button className='summon-btn-rewards w-[140px] lg:w-[200px] xl:w-[240px] 2xl:w-[340px] h-[28px] lg:h-[38px] xl:h-[48px] 2xl:h-[68px] rounded mx-3 border-2 border-[#F2994A] hover:border-[#561510] text-[#F2994A] hover:text-[black] transition ease-in-out duration-500'>See staking rewards</button>
                    <button className='summon-btn-wallet mt-3 md:mt-0 w-[140px] lg:w-[200px] xl:w-[240px] 2xl:w-[340px] h-[28px] lg:h-[38px] xl:h-[48px] 2xl:h-[68px] rounded mx-3 border-2 border-[#561510] hover:border-[#F2994A] text-[black] hover:text-[#F2994A] transition ease-in-out duration-500'>Connect Wallet</button>
                </div>
            </div>}
        </div>
    )
}

export default Summon