import React from 'react'

const MainStakingPoolCard = ({ id, header, textTop, textBody, btnText }) => {
  const words = header.split(' ');
  const firstTwoWords = words.slice(0, 2).join(' ');

  const wordsTwo = header.split(' ');
  const secondTwoWords = wordsTwo.slice(2, 4).join(' ');
  return (
    <div className={`border rounded hover:border-[#F2C94C] w-[100%] sm:w-[47%]  hover:scale-105 flex flex-col justify-between mt-8 transition ease-in-out duration-1000`}
    >
      <div>
        <p className='gradient-outline-brown-light   pt-6 pb-5 text-center text-[5vw] md:text-[5vw] lg:text-[32px] font-upheaval hover:text-[white] tracking-[3px] leading-[25px] md:leading-[60px] lg:leading-[90%] 2xl:leading-[80%] transition ease-in-out duration-500'>
          {firstTwoWords} <br /> <span className='gradient-outline-brown hover:text-[white] transition ease-in-out duration-500'>  {secondTwoWords}</span>
        </p>
        <div className='border border-[#F2C94C] hover:border-[white] rounded mx-7'>
          <p className='text-[white] hover:text-[#F2994A] text-center font-["VT323"] sm:text-[24px] 2xl:text-[34px] py-[3%]  transition ease-in-out duration-500'>
            {textTop}
          </p>
        </div>
        <p className='text-[white] px-10 hover:text-[#F2994A] text-center font-["VT323"] sm:text-[24px] 2xl:text-[34px] py-5  transition ease-in-out duration-500'>
          {textBody}
        </p>
      </div>
      <div className='flex justify-center pb-7'>
        <button className='summon-btn-wallet summon-btn-wallet-text-shadow font-upheaval text-[20px] sm:text-[24px] w-[240px] lg:w-[200px] xl:w-[240px] 2xl:w-[340px] h-[40px] lg:h-[38px] xl:h-[46px] 2xl:h-[68px] rounded mx-3 border-2 border-[#561510] hover:border-[#F2994A] text-[white] hover:text-[#F2994A] tracking-[1px] transition ease-in-out duration-500'>
          {btnText}
        </button>
      </div>
    </div>
  )
}

export default MainStakingPoolCard