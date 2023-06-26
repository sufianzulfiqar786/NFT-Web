import React from 'react'
import Timer from '../../atom/timer/Timer'

const FreeMinutes = () => {
  return (
    <div className='flex justify-center'>
      <div>
        <p className="gradient-outline-brown pt-4 md:pt-9 text-[2.5vw] md:text-[2vw] font-upheaval  tracking-[3px] hover:text-[white] transition ease-in-out duration-500">
          FREE MINT. PLAY TO MINT UNLOCKS IN
        </p>
        <Timer initialTime='2400'/>
      </div>
    </div>
  )
}

export default FreeMinutes