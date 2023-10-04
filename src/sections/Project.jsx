import Title from '../components/Title'
import * as images from '../assets'
import { projects } from '../data'

const Project = ({ hasScrolled }) => {
    return (
        <>
            <div className="pd-inline">
                <section className={`projects section ${hasScrolled ? 'active' : ''}`} id='projects'>

                    <Title title="Project Showcase" />

                    <div className="projects-container mt-2">
                        {projects.map((project) => {
                            const { id, title, tech_stack, desc, period, image, github } = project

                            return (
                                <article key={id} className="project-container">
                                    <div className="project-info">
                                        <div className='info-box'>
                                            <h3 className='project-title mb-1'>
                                                <a href={github} target='_blank'>{title}</a>
                                            </h3>
                                            {/* <span className="github-link">
                                                <a href="https://github.com/">
                                                    <img src={images.github} alt='' className='github-icon' />
                                                </a>
                                            </span> */}
                                            <p className="period">{period}</p>
                                        </div>
                                        <div className="img-container">
                                            <img src={image} alt="" className='website-img' />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="project-desc">{desc}</p>

                                        <div className="tech-container">
                                            {tech_stack.map((item) => {
                                                return (
                                                    <span className="tech-stack bold">{item}</span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Project