import React from 'react'
import Title from '../components/Title'

const About = ({hasScrolled}) => {
    return (
        <>
            <div className="pd-inline">
                <section className={`about section ${hasScrolled ? 'active' : ''}`} id='about'>
                    <Title title="Developer's Tale"/>
                </section>
            </div>
        </>
    )
}

export default About