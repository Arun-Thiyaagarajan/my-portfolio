import React from 'react'
import { navLinks } from '../../data'
import * as images from '../../assets'

const VerticalNavbar = ({ isVisible }) => {
    return (
        <nav className={`v-nav ${isVisible ? 'active' : ''}`}>
            <div className='logo-and-links'>
                <div className="vnav-logo-container">
                    <img src={images.logo} alt="" title='Arun Thiyaagarajan' className="vnav-logo" />
                </div>
                <ul className="v-nav-links">
                    {navLinks.map((item) => {
                        const { id, icon, title, href } = item
                        
                        if (item.title == "Contact") return;

                        return (
                            <li key={id} className='v-nav-icon'>
                                <a href={href} title={title}>
                                    <img src={icon} className='v-icon-img' alt="" />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="chat-container">
                <a href="#contact" title='Chat Me'>
                    <img src={images.chat} className='chat-img' alt="chat me" />
                </a>
            </div>
        </nav>
    )
}

export default VerticalNavbar