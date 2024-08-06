import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import About from './pages/About';
import PublicProfiles from './pages/PublicProfiles';
import Projects from './pages/Projects';

function App() {

  return (
    <Router>
      <div className='relative'>
        <div className='z-20'>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/public-profiles' element={<PublicProfiles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
