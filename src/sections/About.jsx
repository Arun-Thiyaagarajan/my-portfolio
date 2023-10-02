import React from 'react'
import Title from '../components/Title'
import cv from '../assets/cv.png'
import { skills } from '../data'

const About = ({ hasScrolled }) => {
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

                    <div className="about-container mt-3">
                        <div className="about-info">
                            <p className="info-para mb-2">
                                Hey there! I'm <span className="bold">Arun Thiyaagarajan</span>, a passionate and skilled web developer specializing in <span className="bold">HTML, CSS, JavaScript, and React.js</span>. With a strong focus on creating user-centered websites, I combine my technical expertise with a keen design sensibility to deliver captivating UI experiences.
                            </p>
                            <p className="info-para mb-2">
                                I am a well-rounded <span className="bold">web developer</span> with a strong foundation in <span className="bold">front-end and full-stack development</span>. My commitment to clean code, captivating UI, and continuous learning makes me a valuable asset in the field.
                            </p>
                            <p className="info-para">
                                One of my notable achievements includes recognition for an <span className="bold">Intel One-API Hackathon project</span>. This project involved developing a web application that enables users to predict skin diseases. By leveraging technologies such as React JS, Styled-Components, Machine Learning, Deep Learning, Python, and Flask, We created web application that empowers users to identify potential skin issues.
                            </p>
                        </div>
                        <div className="skills-container">
                            {skills.map((skill) => {
                                const { id, icon, title } = skill;
                                return (
                                    <div className="skill">
                                        <img src={icon} alt="" className="skill-icon" />
                                        <p className="skill-title capitalize">{ title }</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default About