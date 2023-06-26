import React from 'react'

// data
import { mainEarnDreamData } from '../../data/mainEarnDreamData/MainEarnDreamData'

// svh
import PotionBottle from '../../assets/images/home/PotionBottle.svg'

const MainEarnDream = () => {

    return (
        <div className='hero-earn-dream-bg flex flex-col items-center pb-[3.5%]'>
            <div className='w-[88px] h-[88px] mt-[9%] mb-[7%]'>
                <img className='w-full h-full object-cover' src={PotionBottle} alt="" />
            </div>

            {mainEarnDreamData.map(({ header, text, id }) => {

                const words = header.split(' ');
                const firstTwoWords = words.slice(0, 2).join(' ');

                const wordsTwo = header.split(' ');
                const secondTwoWords = wordsTwo.slice(2, 4).join(' ');

                return (
                    <div key={id} className='flex flex-col items-center'>
                        <p className='gradient-outline-brown-light mt-[0%] text-center text-[4.7vw] sm:text-[3.7vw] md:text-[56px] font-upheaval hover:text-[white] tracking-[3px] leading-[20px] sm:leading-[28px] md:leading-[52px] transition ease-in-out duration-500'>
                            {firstTwoWords}  <br /> <span className='gradient-outline-brown hover:text-[white] transition ease-in-out duration-500'> {secondTwoWords}</span>
                        </p>
                        {text}
                    </div>
                )
            })
            }
        </div>
    )
}

export default MainEarnDream