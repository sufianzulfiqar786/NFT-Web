import React, { useState } from 'react'

const AccordionMainSection = ({ mainSection }) => {
    const [openMainText, setOpenMainText] = useState({ 100000: true })
    return (
        <div>
            {mainSection.map(({ text, div, id }) => <div key={id} className={`mt-3`}>
                <div
                    className={`flex justify-between font-["VT323"] text-[white] sm:text-[2.2vw] md:text-[24px] 2xl:text-[34px] mt-7`}>
                    <span className='cursor-pointer' onClick={() => {
                        setOpenMainText({ ...openMainText, [id]: !openMainText[id] })
                    }}>
                        {text.toUpperCase()}
                    </span>
                    <span className='cursor-pointer' onClick={() => {
                        setOpenMainText({ ...openMainText, [id]: !openMainText[id] })
                    }}
                    >
                        {!openMainText[id] ? '+' : '-'}
                    </span>
                </div>
                {openMainText[id] ? <div
                    className='w-[95%] font-["VT323"]  text-[white] sm:text-[2.2vw] md:text-[24px] 2xl:text-[34px] leading-0 '>
                    <span> {div} </span>
                </div> : null}
                <hr className='mt-[1%]' />
            </div>)}
        </div>
    )
}

export default AccordionMainSection