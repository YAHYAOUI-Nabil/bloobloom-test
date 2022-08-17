import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import SpectaclesWomen from './pages/SpectaclesWomen';
import SpectaclesMen from './pages/SpectaclesMen';
import SunglassesWomen from './pages/SunglassesWomen';
import SunglassesMen from './pages/SunglassesMen';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Header />
          <Routes>
            <Route path='/' element={<SpectaclesWomen/>}/>
            <Route path='/collections/spectacles-women/glasses' element={<SpectaclesWomen/>}/>
            <Route path='/collections/spectacles-men/glasses' element={<SpectaclesMen/>}/>
            <Route path='/collections/sunglasses-women/glasses' element={<SunglassesWomen/>}/>
            <Route path='/collections/sunglasses-men/glasses' element={<SunglassesMen/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
    
  )
}

export default App