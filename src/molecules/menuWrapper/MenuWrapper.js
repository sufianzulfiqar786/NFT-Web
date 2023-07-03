import React from 'react'

// components
import { menuWrapperText } from '../../data/menuWrapperData/MenuWrapperData'
import { Link } from 'react-router-dom'

const MenuWrapper = () => {
    return (
        <div className="flex justify-center ">
            <div className="flex justify-center border bg-[#00000077] hover:bg-[#000000af] border-[#F2C94C] rounded-xl  w-2/5 2xl:w-[35%] mt-2 md:mt-12 transition ease-in-out duration-1000">
                <div className='pl-0 py-3 sm:py-3 md:py-5 inline '>
                    {
                        menuWrapperText.map(({ text, id, link }) => <p key={id} className="font-['Silkscreen'] text-[8px] sm:text-[12px] md:text-[18px] lg:text-[25px] xl:text-[32px] text-[white] hover:text-[#E3B743] md:py-1 right-bottom-shadow group transition ease-in-out duration-300" >
                            <span className='invisible group-hover:visible'>
                                <svg className='cursor-pointer inline mr-2 md:mr-3 w-[6px] md:w-[15px] lg:w-[22px] h-[25] md:h-[30]' viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.375 0H6.295V4H10.625V7H14.625V10H18.625V13H21.625V17H18.625V20H14.625V23H10.625V26H6.295V29.6H0.375V0Z" fill="#E3B743" />
                                </svg>
                            </span>
                            <span className='cursor-pointer'><Link to={link}>{text}</Link></span>
                        </p>)
                    }
                </div>
            </div>
        </div>
    )
}

export default MenuWrapper