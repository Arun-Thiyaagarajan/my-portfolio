import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './sections/Home'
import About from './sections/About'
import Project from './sections/Project'
import Contact from './sections/Contact'

const App = () => {

    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!hasScrolled && window.scrollY > 120) {
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
            <Project hasScrolled={hasScrolled} />
            <Contact hasScrolled={hasScrolled} />
        </main>
    )
}

export default App