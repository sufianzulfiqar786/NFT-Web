import React from 'react'

// gif
import knightRun from '../../assets/images/loader/knightRun.gif'

const VideoLoader = () => {
    return (
        <div className='bg-[#5C7E1D] flex justify-center items-center h-screen w-full' >
            <img src={knightRun} alt="loading" />
        </div>
    )
}

export default VideoLoader