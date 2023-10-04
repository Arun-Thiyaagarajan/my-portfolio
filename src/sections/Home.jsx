import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import './sections.css'
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa6'
import SocialLinks from '../components/SocialLinks/SocialLinks'
import VerticalNavbar from '../components/Navbar/VerticalNavbar'
import * as images from '../assets'

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navbarHeightRem = 6; // Define the navbar height in vh units

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= navbarHeightRem * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar />

            <SocialLinks />

            <VerticalNavbar isVisible={isVisible} />

            <div className="pd-inline">
                <section className="hero">
                    <div className="hero-text">

                        <h1 className="hello-text">hello world :)</h1>

                        <p className="hero-content">
                            <span><FaQuoteLeft /> </span>
                            In the world of <span className='highlight'>web & app development</span>, I'm the craftsman weaving a tapestry of code and creativity! Inviting users on immersive journeys.
                            <span> <FaQuoteRight /></span>
                        </p>

                        <div className="scroll-down">
                            <a href="#about">
                                <img src={images.scrolldown} className='scroll-down-icon' alt="" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home