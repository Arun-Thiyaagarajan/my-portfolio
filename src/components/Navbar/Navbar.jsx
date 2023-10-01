import React from 'react'
import { navLinks } from '../../data'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    return (
        <nav className='pd-inline'>
            <div className="nav-center">

                <div className="logo">
                    <h2 className='logo-title'>
                        <Link to='/'>Arun Thiyaagarajan</Link>
                    </h2>
                </div>

                <ul className="nav-links">
                    {navLinks.map((link) => {
                        const { id, title, href } = link
                        return (
                            <li key={id} className="nav-link">
                                <Link to={href}>{title}</Link>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </nav>
    )
}

export default Navbar