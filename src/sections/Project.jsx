import Title from '../components/Title'

const Project = ({hasScrolled}) => {
    return (
        <>
            <div className="pd-inline">
                <section className={`projects section ${hasScrolled ? 'active' : ''}`} id='projects'>
                    <Title title="Project Showcase" />
                </section>
            </div>
        </>
    )
}

export default Project