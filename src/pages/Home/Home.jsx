import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import { FaChevronRight, FaQuoteRight, FaQuoteLeft } from 'react-icons/fa6'
import { FaAngleDoubleRight } from 'react-icons/fa'
import SocialLinks from '../../components/SocialLinks/SocialLinks'

const Home = () => {
    
    return (
        <>
            <Navbar />

            <SocialLinks />

            <div className="pd-inline">
                <section className="hero">
                    <div className="hero-text">
                        <h1 className="hello-text">hello world :)</h1>
                        <p className="hero-content">
                            <span><FaQuoteLeft /> </span>
                            In the world of web development, I'm the craftsman weaving a tapestry of code and creativity! Inviting users on immersive journeys.
                            <span> <FaQuoteRight /></span>
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home