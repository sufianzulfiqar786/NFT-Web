import React from 'react'

// svg
import dashCharacter from '../../assets/images/home/dashCharacter.gif'

const MainSectionKnightsNFT = () => {
  return (
    <div className='main-section-knights-nft flex flex-col items-center'>
      <p className='gradient-outline-brown-dull pt-[8%] text-center text-[4.7vw] sm:text-[3.7vw] md:text-[3.7vw] font-upheaval hover:text-[white] tracking-[3px] leading-[28px] md:leading-[60px] transition ease-in-out duration-500'>
        Passive income
      </p>
      <p className='text-[white] hover:text-[#F2994A] text-center w-[80%] md:w-[35%] font-["VT323"] sm:text-[24px] 2xl:text-[34px] pt-[1.3%] transition ease-in-out duration-500'>
        Staking enables shared OpenSea royalties, shared game platform fees, and deflationary value for the collection. <span className='text-[#F2994A] hover:text-[white] transition ease-in-out duration-500 cursor-pointer'>Learn more</span>.
      </p>
      <div className='w-[113px] sm:w-[153px] 2xl:w-[283px] h-[117px] sm:h-[157px] 2xl:h-[287px] my-[7%]'>
        <img className='w-full h-full object-cover' src={dashCharacter} alt="" />
      </div>
      <p className='gradient-outline-brown-light mt-[0.3%] text-center text-[4.7vw] sm:text-[3.7vw] md:text-[56px] font-upheaval hover:text-[white] tracking-[3px] leading-[20px] sm:leading-[28px] md:leading-[52px] transition ease-in-out duration-500'>
        P2E Utility  <br /> <span className='gradient-outline-brown-dull hover:text-[white] transition ease-in-out duration-500'>in an expanding <br /> <span className='gradient-outline-brown hover:text-[white] transition ease-in-out duration-500'>world</span>  </span>
      </p>
      <p className='text-[white] hover:text-[#F2994A] text-center w-[80%] md:w-[35%] font-["VT323"] sm:text-[24px] 2xl:text-[34px] pt-[2%] pb-[8%] transition ease-in-out duration-500'>
        Each Knight grants access to exclusive P2E games. Because the games use a unique, skill-based model, earnings are based in $ETH and much higher than other ecosystems. Try the first game now [Links to Section 4] and earn an Allowlist spot.
      </p>
    </div>
  )
}

export default MainSectionKnightsNFT