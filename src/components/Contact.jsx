import React from 'react'
import { motion } from 'framer-motion'
import {
    RiArrowRightLine,
    RiRocket2Fill,
    RiMailCheckLine,
    RiWhatsappLine,
    RiMapPin2Line
} from 'react-icons/ri'
import './Contact.css'

export default function Contact() {
    return (
        <section className="section contact-section" id="contact">
            <div className="contact-bg-glow"></div>

            <div className="container contact-container">
                <motion.div
                    className="contact-glass-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <div className="contact-card-inner">
                        <div className="contact-badge">
                            <RiRocket2Fill size={16} />
                            <span>Early Access Waitlist</span>
                        </div>

                        <h2 className="contact-headline">
                            Ready to open<br />
                            the <span className="text-red">Next Door?</span>
                        </h2>

                        <p className="contact-desc">
                            We're looking for passionate founders from Tier 2 & 3 cities.
                            Secure your spot for early access to Valido AI, our community, and exclusive resources.
                        </p>

                        <motion.button
                            className="btn btn-primary btn-lg contact-cta"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Register Now <RiArrowRightLine size={20} />
                        </motion.button>

                        <div className="contact-trust-badges">
                            <span>✓ Free to apply</span>
                            <span>✓ Response within 48hrs</span>
                            <span>✓ No strings attached</span>
                        </div>

                        <div className="contact-divider"></div>

                        <div className="contact-channels">
                            <a href="mailto:hello@thenextdoorindia.com" className="contact-channel-item">
                                <div className="channel-icon"><RiMailCheckLine size={20} /></div>
                                <div className="channel-text">hello@thenextdoorindia.com</div>
                            </a>
                            <div className="contact-channel-item">
                                <div className="channel-icon"><RiWhatsappLine size={20} /></div>
                                <div className="channel-text">Join our founder group</div>
                            </div>
                            <div className="contact-channel-item">
                                <div className="channel-icon"><RiMapPin2Line size={20} /></div>
                                <div className="channel-text">Northeast India Focus</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
