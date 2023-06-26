import React from 'react'

// components
import Logo from '../../molecules/logo/Logo'
import FooterCopyRight from '../../atom/footerCopyRight/FooterCopyRight'
import FooterMenuText from '../../atom/footerMenuText/FooterMenuText'

const Footer = () => {
    return (
        <div className='bg-[#262627]'>
            <div className='md:px-10 py-8 mx-5  md:mx-10  md:flex justify-between items-center '>
                <Logo width='13rem' fontSize='1rem' />
                <FooterMenuText />
            </div>
            <FooterCopyRight />
        </div>
    )
}

export default Footer