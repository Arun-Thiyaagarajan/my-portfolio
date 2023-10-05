import React from 'react'
import Title from '../components/Title'
import { FaChevronRight } from 'react-icons/fa6'
import Footer from '../components/Footer'
import * as images from '../assets'

const Contact = ({ hasScrolled }) => {
    return (
        <>
            <div className="pd-inline">
                <section className={`contact section ${hasScrolled ? 'active' : ''}`} id='contact'>

                    <Title title={"Connect_With_Me()"} />

                    <div className="contact-container mt-2">
                        <div className="contact-form-container">

                            <h3 className="contact-title bold mb-2">Lets's Connect</h3>

                            <p className="contact-desc mb-2">Connect with me easily by providing your name, email, and message.</p>

                            <form onSubmit={false} autoComplete='off' className="contact-form">

                                <div className="input-box mb-1">
                                    <label htmlFor="name" className='name'>
                                    <span className='arrow-right'><FaChevronRight /></span> Name</label>
                                    <span className='dots'> ..................... </span>
                                    <input type="text" name='name' placeholder='<Enter />' autoCorrect='false' />
                                </div>

                                <div className="input-box mb-1-5">
                                    <label htmlFor="email" className='email'><span className='arrow-right'><FaChevronRight /></span> Email ID</label>
                                    <span className='dots'> ................. </span>
                                    <input type="email" name='email' placeholder='<Enter />' />
                                </div>

                                <div className="input-box tarea">
                                    <label htmlFor="message" className='message'><span className='arrow-right'><FaChevronRight /></span> Message</label>
                                    <span className='dots'> .................. </span>
                                    <textarea type="text" name='message' cols='30' rows='5' placeholder='<Enter />' />
                                </div>

                                <button className="submit-btn">
                                    <span className="send-text">Send</span>
                                    <span className="send-icon-span">
                                        <img src={ images.send } alt="send" className='send-icon' />
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}

export default Contact