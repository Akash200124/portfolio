import React, { useState } from 'react';
import VantaBackgroundwithout from '../Components/VantaBackgroundwithout.jsx';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        window.location.href = `mailto:akashkumar200124@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="relative h-full" id="contact">
            {/* Background */}
            <VantaBackgroundwithout />

            {/* Foreground Content */}
            <section className="relative z-10 text-white py-20 px-4 md:px-20">
                <h2 className="text-4xl font-bold  text-center text-indigo-500">Contact Me</h2>
                <div className="text-center text-xl ">
                    Have a question or want to work together?
                    <br />
                    Leave your details and I'll get back to you as soon as possible.
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="max-w-xl mx-auto flex flex-col gap-6"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Type your message here..."
                            className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:border-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded text-white font-medium"
                    >
                        Send Message
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Contact;
