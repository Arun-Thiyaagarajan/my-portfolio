import React from 'react'
import { navLinks } from '../../data'
import logo from '../../assets/atlogo.png'

const VerticalNavbar = ({isVisible}) => {
    return (
        <nav className={`v-nav ${isVisible ? 'active' : ''}`}>
            <div className="vnav-logo-container">
                <img src={logo} alt="" title='Arun Thiyaagarajan' className="vnav-logo" />
            </div>
            <ul className="v-nav-links">
                {navLinks.map((item) => {
                    const { id, icon, title, href } = item
                    return (
                        <li key={id} className='v-nav-icon'>
                            <a href={href} title={title}>
                                <img src={icon} className='v-icon-img' alt="" />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default VerticalNavbar