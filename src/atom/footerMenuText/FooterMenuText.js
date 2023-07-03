import React from 'react'
import { Link } from 'react-router-dom'

// Data
import { menuText } from '../../data/footerMenuData/FooterMenuData'

const FooterMenuText = () => {

  return (
    <div className='pt-5 md:pt-0 flex flex-wrap justify-center md:justify-end'>
      {
        menuText.map(({ text, id, link }) => <p key={id} className='inline px-2 md:px-4 text-[11px] lg:text-[16px] 2xl:text-[20px] font-["Inter"] text-[#DADADA] hover:text-white transition ease-in-out duration-500'>
          <Link to={link}>
            {text}
          </Link>
        </p>)
      }
    </div>
  )
}

export default FooterMenuText