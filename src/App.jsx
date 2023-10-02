import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './sections/Home'
import About from './sections/About'

const App = () => {

  const [hasScrolled, setHasScrolled] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
        if (!hasScrolled && window.scrollY > 0) {
            setHasScrolled(true);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [hasScrolled]);

  return (
    <main id='home'>
      <Home />
      <About hasScrolled={hasScrolled} />
    </main>
  )
}

export default App