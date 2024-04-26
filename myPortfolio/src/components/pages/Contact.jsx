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
        }
    }


    return (
        <div>
            <div>
                <ul><h2>To Do</h2>
                    <li>Email myself Contact Submissions</li>
                    <li>move socical-links to Nav/Header??</li>
                    <li>have links open new tab??</li>
                </ul>
            </div>
            <h2>Contact Page</h2>
            <a href="https://www.linkedin.com/in/andrew-h-taggart/"> LinkedIn </a>
            <a href="https://github.com/andrew-taggart"> GitHub </a>
            <p>email: andrew.taggart53@gmail.com</p>
            <p>Create data library and allow messaging with push to email or phone</p>
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