import React from 'react'
import './SocialLink.css'
import { socialLinks } from '../../data'

const SocialLinks = () => {
    return (
        <>
            <article className='social-link-container'>
                {socialLinks.map((link) => {
                    const { id, title, icon, href } = link;
                    return (
                        <a href={href} target='_blank' key={id} title={title} className="social-link">
                            <img src={icon} alt="" className='social-link-img' />
                        </a>
                    );
                })}
            </article>
        </>
    )
}

export default SocialLinks