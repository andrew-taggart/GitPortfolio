import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.message) {
            alert('All fields must be filled out')
        } else {
            console.log('Form Data:', formData)
            alert('Form submitted succesfully!')
            //Send Data to email or Data
        }
    }


    return (
        <div className="contact-container">

            <h1>Contact Page</h1>

            <div className='links-container'>
                <a href="https://www.linkedin.com/in/andrew-h-taggart/" target="_blank"> LinkedIn </a>
                <a href="https://github.com/andrew-taggart" target="_blank"> GitHub </a>
            </div>

            <div className='ContactForm'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact