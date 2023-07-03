import React from 'react'

// svg
import shotMan from '../../assets/images/home/shotMan.gif'

const MainFirstPlay = () => {
    return (
        <div className='main-first-play-bg flex flex-col items-center'>
            <p className='gradient-outline-brown text-center pt-[7%] pb-[3%] text-[4vw] sm:text-[2vw] md:text-[3vw] xl:text-[56px] 2xl:text-[66px] font-upheaval hover:text-[white] tracking-[3px] transition ease-in-out duration-500'>
                GAMEPLAY
            </p>
            <p className='text-[white] hover:text-[#F2994A] text-center w-[80%] md:w-[61%] font-["VT323"] sm:text-[24px] 2xl:text-[34px] pt-[0%] pb-[6%] transition ease-in-out duration-500'>
                Simple to learn hard to master. Enter the Pixel Quest castle as a bowman. Convert monstrous
                slimes to your team and shoot down your opponents. Dashing, parrying, and fast-paced
                marksmanship make the game a heart-pumping challenge
            </p>
            <div className='w-[133px] h-[117px] md:w-[291px] md:h-[204px]  mb-[6%] '>
                <img className='w-full h-full object-cover' src={shotMan} alt="" />
            </div>
            {/* <div className='w-[291px] h-[204px] mb-[6%]'>
            <img className='w-full h-full object-cover' src={shotMan} alt="" />
            </div> */}
        </div>
    )
}

export default MainFirstPlay