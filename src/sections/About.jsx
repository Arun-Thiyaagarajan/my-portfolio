import React from 'react'
import Title from '../components/Title'
import cv from '../assets/cv.png'

const About = ({hasScrolled}) => {
    return (
        <>
            <div className="pd-inline">
                <section className={`about section ${hasScrolled ? 'active' : ''}`} id='about'>
                    <Title title="Developer's Tale" />
                    <span className="resume-icon">
                        <a href="https://drive.google.com/file/d/1Imv7XrxhWYlPLvNd7z6SetrGDfPAPXgo/view?usp=drive_link" target='_blank' title='See My Resume' rel="noopener noreferrer">
                            <img src={cv} alt="Resume" className='resume-img' />
                        </a>
                    </span>
                </section>
            </div>
        </>
    )
}

export default About