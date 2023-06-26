import React from 'react'

// components
import MainStakingPoolCard from '../../molecules/Cards/MainStakingPool'

// data 
import { mainStakingPoolCardData } from '../../data/mainStakingPoolCardData/MainStakingPoolCardData'

const MainStakingPool = () => {
   
    return (
        <div className='main-staking-pool-bg '
        >
            <div className='flex justify-between flex-wrap mx-auto w-[86%] sm:w-[90%] lg:w-[76%] xl:w-[46%] sm:py-20'>
                {mainStakingPoolCardData.map(({ id, header, textTop, textBody, btnText }) => <MainStakingPoolCard key={id} header={header} textTop={textTop} textBody={textBody} btnText={btnText} />)}
            </div>
            <p className="gradient-outline-brown-dull text-center pt-8 md:pt-[4.5%]  text-[3vw] md:text-[3vw] font-upheaval  tracking-[3px] hover:text-[white] transition ease-in-out duration-500">
                Where do earnings come from?
            </p>
            <p className='gradient-outline-brown-light mt-[5%] text-center sm:text-[3vw] md:text-[4.5vw] font-upheaval hover:text-[white] tracking-[3px] leading-[18px] md:leading-[60px] 2xl:leading-[80%] transition ease-in-out duration-500'>
                Shared OpenSea  <br /> <span className='gradient-outline-brown hover:text-[white] transition ease-in-out duration-500'> Royalties</span>
            </p>
            <p className='text-[white] px-10 sm:pt-14 hover:text-[#F2994A] text-center font-["VT323"] sm:text-[24px] 2xl:text-[34px] py-5 w-[100%] sm:w-[68%] mx-auto transition ease-in-out duration-500'>
                The collection will have a 10% creator’s fee. 3% will go to Holders who stake their Knight. 7% will go to additional game development and the team’s salary.
            </p>
            <p className="gradient-outline-brown-dull text-center pt-4 md:pt-[3.5%]  text-[3.5vw]  md:text-[4vw] font-upheaval  tracking-[3px] hover:text-[white] transition ease-in-out duration-500">
            Earn while others play
            </p>
            <p className='text-[white] px-10 md:pt-14 pb-8 sm:pb-24 hover:text-[#F2994A] text-center font-["VT323"] sm:text-[24px] 2xl:text-[34px] py-5 w-[100%] sm:w-[68%] mx-auto transition ease-in-out duration-500'>
            The fun and highly profitable Pixel Quest games are available to holders to free. Non-holders must pay a $1.50 fee to enter. 90% of these fees will go to staked holders
            </p>
        </div>
    )
}

export default MainStakingPool