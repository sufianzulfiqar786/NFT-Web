import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// svg
import twitter from './assets/images/home/twitter.svg'

// components
import Footer from './organisms/footer/Footer';
import VideoLoader from './atom/videoLoader/VideoLoader';

// components(React.lazy)
const Home = React.lazy(() => import('./pages/home/Home'))
const PixelToProfits = React.lazy(() => import('./pages/pixelToProfits/PixelToProfits'))
const Summon = React.lazy(() => import('./pages/summon/Summon'))
const KnightsNFT = React.lazy(() => import('./pages/knightsNFT/KnightsNFT'))
const FirstPlay = React.lazy(() => import('./pages/firstPlay/FirstPlay'))
const EarnDream = React.lazy(() => import('./pages/earnDream/EarnDream'))
const StakingPool = React.lazy(() => import('./pages/stakingPool/StakingPool'))

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<VideoLoader />}>
        <div className='fixed right-5 md:right-10 top-5 md:top-10 z-20 w-[38px] md:w-[48px] h-[38px] md:h-[48px] '>
          <img className='w-full h-full object-cover ' src={twitter} alt="" />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pixeltoprofits" element={<PixelToProfits />} />
          <Route path="/summon" element={<Summon />} />
          <Route path="/knightsnft" element={<KnightsNFT />} />
          <Route path="/firstplay" element={<FirstPlay />} />
          <Route path="/earndream" element={<EarnDream />} />
          <Route path="/stakingpool" element={<StakingPool />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
