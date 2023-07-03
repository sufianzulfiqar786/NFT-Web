import React, { useState } from 'react'

// video
import NFTPage from "../../assets/images/home/NFTPage.gif";

// svg
import WallImg from '../../assets/images/home/WallImg.svg'

// data
import { knightsNFTData } from '../../data/knightsNFTData/KnightsNFTData'

// component
import VideoLoader from '../../atom/videoLoader/VideoLoader';

const HeroSectionKnightsNFT = ({videoLoaded, setVideoLoaded}) => {
    return (
        <div className="relative">
            {!videoLoaded &&
                <VideoLoader />
            }
            {/* <video controls={false} autoPlay muted loop src={NFTPage}
                className={`w-full ${videoLoaded ? '' : 'hidden'}`}
                onLoadedData={() => setVideoLoaded(true)} /> */}
                <div className='w-full xl:h-[125vh]'>
                <img className={`w-full h-full object-cover ${videoLoaded ? '' : 'hidden'}`} src={NFTPage} alt="" onLoad={() => setVideoLoaded(true)} />
            </div>
            {videoLoaded && <>
                <div className="nft-page-bg absolute w-full h-full top-[0%] flex justify-center items-center flex-col ">
                    <p className='gradient-outline-brown-light mt-[8%] text-center text-[3.5vw] md:text-[5vw] font-upheaval hover:text-[white] tracking-[3px] leading-[18px] md:leading-[60px] 2xl:leading-[80%] transition ease-in-out duration-500'>
                        The Knights NFT is <br /> <span className='gradient-outline-brown hover:text-[white] transition ease-in-out duration-500'> more than just a PFP</span>
                    </p>
                    <div className="flex flex-wrap justify-center  items-center md:flex-row  border hover:border-2 border-[#00000000] font-['VT323'] text-[1em] sm:text-[2.3em] xl:text-[32px] 2xl:text-[3vw] rounded-xl w-[100%]  lg:w-[100%] mt-2 md:mt-12">
                        {
                            knightsNFTData.map(({ text1, text2, id }) => <button key={id} className='knights-nft-btn font-upheaval  h-[35%] sm:h-[108px] 2xl:h-[130px] w-[33%] lg:w-[20%] mx-2 mt-4 lg:mt-0 pb-4 2xl:pb-[1.5%]'>
                                <p className='gradient-outline-brown-light mt-[5%] text-center font-upheaval hover:text-[white] tracking-[3px] leading-[20px] sm:leading-[28px] md:leading-[32px] 2xl:leading-[80%] transition ease-in-out duration-500'>
                                    {text1}  <br /> <span className='gradient-outline-brown hover:text-[white] transition ease-in-out duration-500'> {text2}</span>
                                </p>
                            </button>)
                        }
                    </div>
                </div>
                <div className='z-10 absolute bottom-0 w-full'>
                    <img className='w-full h-full ' src={WallImg} alt="" />
                </div>
            </>}
        </div>
    )
}

export default HeroSectionKnightsNFT