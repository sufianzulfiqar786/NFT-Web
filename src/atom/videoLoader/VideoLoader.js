import React from 'react'

// gif
import knightRun from '../../assets/images/loader/knightRun.gif'

const VideoLoader = () => {
    return (
        <div className='bg-[#5C7E1D] flex justify-center items-center h-screen w-full' >
            <div className='w-[40%] md:w-[50%] lg:w-[20%]'>
                <img className='w-full h-full object-cover' src={knightRun} alt="loading" />
            </div>
        </div>
    )
}

export default VideoLoader