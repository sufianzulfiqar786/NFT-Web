import React from 'react'

// Data file
import {menuText} from '../../data/footerMenuData/FooterMenuData'

const FooterMenuText = () => {
  
  return (
    <div className='pt-5 md:pt-0 flex justify-center md:justify-end'>
      {
        menuText.map(({ text, id }) => <p key={id} className='inline px-2 md:px-4 text-[11px] lg:text-[16px] 2xl:text-[20px]  text-[#DADADA] hover:text-white transition ease-in-out duration-500'>{text}</p>)
      }
    </div>
  )
}

export default FooterMenuText