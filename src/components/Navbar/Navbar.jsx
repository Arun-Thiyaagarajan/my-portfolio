import React from 'react'
import { navLinks } from '../../data'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className='pd-inline nav'>
            <div className="nav-center">

                <div className="logo">
                    <h2 className='logo-title'>
                        <a href='/'>Arun Thiyaagarajan</a>
                    </h2>
                </div>

                <ul className="nav-links">
                    {navLinks.map((link) => {
                        const { id, title, href } = link
                        return (
                            <li key={id} className="nav-link">
                                <a href={href}>{title}</a>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </nav>
    )
}

export default Navbar