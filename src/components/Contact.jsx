import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
    RiMailLine,
    RiWhatsappLine,
    RiMapPin2Line,
    RiArrowRightLine,
    RiCheckDoubleLine,
} from 'react-icons/ri'
import './Contact.css'

const stages = ['Idea Stage', 'Validation', 'MVP Built', 'Early Revenue', 'Scaling']

const contactInfo = [
    {
        icon: <RiMailLine size={18} />,
        label: 'Email',
        value: 'hello@thenextdoorindia.com',
    },
    {
        icon: <RiWhatsappLine size={18} />,
        label: 'WhatsApp',
        value: 'Join our founder group',
    },
    {
        icon: <RiMapPin2Line size={18} />,
        label: 'Focus Region',
        value: 'Northeast India · Tier 2/3 cities',
    },
]

export default function Contact() {
    const [form, setForm] = useState({
        name: '', email: '', startup: '', stage: '', message: '',
    })
    const [submitted, setSubmitted] = useState(false)
    const [focusedField, setFocusedField] = useState(null)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <section className="section contact-section" id="contact">
            <div className="container">
                <div className="contact-layout">
                    {/* Left */}
                    <motion.div
                        className="contact-left"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                    >
                        <span className="section-label">Apply Now</span>
                        <h2 className="contact-headline">
                            Ready to open<br />
                            the <span className="text-red">Next Door?</span>
                        </h2>
                        <p className="contact-desc">
                            Tell us about your startup, where you are, and what you need.
                            We'll be in touch within <strong>48 hours.</strong>
                        </p>

                        <div className="contact-info-list">
                            {contactInfo.map((info, i) => (
                                <motion.div
                                    key={info.label}
                                    className="contact-info-item"
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15 + i * 0.08 }}
                                    whileHover={{ x: 4 }}
                                >
                                    <div className="contact-info-icon">{info.icon}</div>
                                    <div>
                                        <span className="contact-info-label">{info.label}</span>
                                        <span className="contact-info-value">{info.value}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="contact-trust">
                            <div className="trust-item"><RiCheckDoubleLine size={14} className="trust-icon" /> Free to apply</div>
                            <div className="trust-item"><RiCheckDoubleLine size={14} className="trust-icon" /> Response within 48hrs</div>
                            <div className="trust-item"><RiCheckDoubleLine size={14} className="trust-icon" /> No strings attached</div>
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        className="contact-right"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                    >
                        {submitted ? (
                            <div className="contact-success">
                                <motion.div
                                    className="contact-success-icon"
                                    initial={{ scale: 0, rotate: -20 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 16 }}
                                >
                                    ✅
                                </motion.div>
                                <h3>Application received!</h3>
                                <p>We'll review your submission and reach out within 48 hours. Welcome to The Next Door family.</p>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setSubmitted(false)}
                                >
                                    Submit another application
                                </button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit} id="startup-form">
                                <div className="form-header">
                                    <h3 className="form-title">Startup Application</h3>
                                    <span className="form-badge">Free</span>
                                </div>

                                <div className="form-row">
                                    <div className={`form-group ${focusedField === 'name' ? 'focused' : ''}`}>
                                        <label htmlFor="name">Your Name <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Anup Medhi"
                                            value={form.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                        />
                                    </div>
                                    <div className={`form-group ${focusedField === 'email' ? 'focused' : ''}`}>
                                        <label htmlFor="email">Email Address <span className="required">*</span></label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="you@startup.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className={`form-group ${focusedField === 'startup' ? 'focused' : ''}`}>
                                        <label htmlFor="startup">Startup Name</label>
                                        <input
                                            type="text"
                                            id="startup"
                                            name="startup"
                                            placeholder="Your startup name"
                                            value={form.startup}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('startup')}
                                            onBlur={() => setFocusedField(null)}
                                        />
                                    </div>
                                    <div className={`form-group ${focusedField === 'stage' ? 'focused' : ''}`}>
                                        <label htmlFor="stage">Startup Stage</label>
                                        <select
                                            id="stage"
                                            name="stage"
                                            value={form.stage}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('stage')}
                                            onBlur={() => setFocusedField(null)}
                                        >
                                            <option value="">Select your stage</option>
                                            {stages.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className={`form-group ${focusedField === 'message' ? 'focused' : ''}`}>
                                    <label htmlFor="message">
                                        Tell us about your startup &amp; what you need <span className="required">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="Describe your idea, the problem you're solving, and how we can help..."
                                        value={form.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="btn btn-primary btn-lg form-submit"
                                    id="form-submit-btn"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Submit Application <RiArrowRightLine size={18} />
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
