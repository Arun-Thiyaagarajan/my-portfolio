import React, { useState } from 'react'
import Title from '../components/Title'
import { FaChevronRight } from 'react-icons/fa6'
import Footer from '../components/Footer'
import * as images from '../assets'

const Contact = ({ hasScrolled }) => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                alert('Email sent successfully');
                setFormData({ name: '', email: '', message: '' }); // Clear the form inputs
            } else {
                alert('Error sending email');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the email');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <div className="pd-inline">
                <section className={`contact section ${hasScrolled ? 'active' : ''}`} id='contact'>

                    <Title title={"Connect_With_Me()"} />

                    <div className="contact-container mt-2">
                        <div className="contact-form-container">

                            <h3 className="contact-title bold mb-2">Lets's Connect</h3>

                            <p className="contact-desc mb-2">Connect with me easily by providing your name, email, and message.</p>

                            <form onSubmit={handleSubmit} autoComplete='off' className="contact-form">

                                <div className="input-box mb-1">
                                    <label htmlFor="name" className='name'>
                                        <span className='arrow-right'><FaChevronRight /></span> Name</label>
                                    <span className='dots'> ..................... </span>
                                    <input onChange={handleInputChange} value={formData.name} type="text" name='name' placeholder='<Enter />' autoCorrect='false' required />
                                </div>

                                <div className="input-box mb-1-5">
                                    <label htmlFor="email" className='email'><span className='arrow-right'><FaChevronRight /></span> Email ID</label>
                                    <span className='dots'> ................. </span>
                                    <input onChange={handleInputChange} value={formData.email} type="email" name='email' placeholder='<Enter />' required />
                                </div>

                                <div className="input-box tarea">
                                    <label htmlFor="message" className='message'><span className='arrow-right'><FaChevronRight /></span> Message</label>
                                    <span className='dots'> .................. </span>
                                    <textarea onChange={handleInputChange} value={formData.message} type="text" name='message' cols='30' rows='5' placeholder='<Enter />' required />
                                </div>

                                <button className="submit-btn">
                                    <span className="send-text">Send</span>
                                    <span className="send-icon-span">
                                        <img src={images.send} alt="send" className='send-icon' />
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