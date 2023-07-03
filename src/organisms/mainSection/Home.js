import React from 'react'

// data
import { mainSection } from '../../data/mainSectionData/MainSectionData'

// svg
import Grass from '../../assets/images/home/Grass.svg'
import AccordionMainSection from '../../molecules/accordionMainSection/AccordionMainSection'

const MainSection = () => {

    return (
        <div
            className='main-section flex justify-center '
        >
            <div className='my-12 w-[89%] md:w-[69%] '>
                <div className='flex justify-center items-center flex-col mb-10'>
                    <p className='gradient-outline-brown text-[6vw] sm:text-[4.5vw] md:text-[3vw] font-upheaval hover:text-[white] tracking-[3px] transition ease-in-out duration-500'>
                        F.A.Q
                    </p>
                    <div className='flex'>
                        <img className='w-[3vw] md:w-[4vw] lg:w-[6vw] mx-4' src={Grass} alt="" />
                        <p className="logo-text pt-0 md:pt-3 text-[white] hover:text-[#fe9710] text-[4.5vw] sm:text-[3.5vw] md:text-[3vw] font-['VT323'] leading-[15px] tracking-[-1px] transition ease-in-out duration-500">
                            FREQUENTLY ASKED QUESTIONS
                        </p>
                        <img className='w-[3vw] md:w-[4vw] lg:w-[6vw] mx-4' src={Grass} alt="" />
                    </div>
                </div>
                <AccordionMainSection mainSection={mainSection} />
            </div>
        </div>
    )
}

export default MainSection