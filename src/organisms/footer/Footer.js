import React from 'react'
import { Link } from 'react-router-dom'

// components
import Logo from '../../molecules/logo/Logo'
import FooterCopyRight from '../../atom/footerCopyRight/FooterCopyRight'
import FooterMenuText from '../../atom/footerMenuText/FooterMenuText'

const Footer = () => {
    return (
        <div className='bg-[#262627]'>
            <div className='md:px-10 py-8 mx-5  md:mx-10  md:flex justify-between items-center '>
                <Link to={'/'}><Logo width='10rem' fontSize='0.9rem' /></Link>
                <FooterMenuText />
            </div>
            <FooterCopyRight />
        </div>
    )
}

export default Footer