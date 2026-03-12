import React from 'react'
import { motion } from 'framer-motion'
import {
    RiFileListLine,
    RiLinkM,
    RiMessage3Line,
    RiNotification2Line,
    RiMailLine,
    RiWhatsappLine,
    RiGlobalLine,
    RiMicLine,
} from 'react-icons/ri'
import './HowItWorks.css'

const steps = [
    {
        step: '01',
        icon: <RiFileListLine size={24} />,
        title: 'Onboard & Share Your Stage',
        desc: 'Fill out a simple form — your startup stage, domain, needs, and current pitch deck. We get to know you.',
        accent: 'step-red',
    },
    {
        step: '02',
        icon: <RiLinkM size={24} />,
        title: 'Get Mapped to Incubators',
        desc: 'We match you with the most relevant incubators, accelerators, and grant programs suited to your stage and region.',
        accent: 'step-dark',
    },
    {
        step: '03',
        icon: <RiMessage3Line size={24} />,
        title: 'Receive Mentorship & Feedback',
        desc: 'Our team provides pitch refinement, business plan review, and personalized feedback loops.',
        accent: 'step-red',
    },
    {
        step: '04',
        icon: <RiNotification2Line size={24} />,
        title: 'Stay Updated, Stay Ahead',
        desc: 'Get verified program alerts via email, WhatsApp, web portal, and our podcast — in your language, on your time.',
        accent: 'step-dark',
    },
]

const channels = [
    { icon: <RiMailLine size={16} />, label: 'Email' },
    { icon: <RiWhatsappLine size={16} />, label: 'WhatsApp' },
    { icon: <RiGlobalLine size={16} />, label: 'Web Portal' },
    { icon: <RiMicLine size={16} />, label: 'Podcast' },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function HowItWorks() {
    return (
        <section className="section hiw-section" id="how-it-works">
            <div className="container">
                <div className="section-head">
                    <span className="section-label">How It Works</span>
                    <h2 className="hiw-headline">
                        From zero to launch —<br />
                        <span className="text-red">four simple steps.</span>
                    </h2>
                    <p className="hiw-sub">
                        Our platform walks every founder through a structured discovery, matching, and
                        mentorship journey — regardless of where they start.
                    </p>
                </div>

                <motion.div
                    className="hiw-steps"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {/* Connector */}
                    <div className="hiw-connector">
                        <motion.div
                            className="hiw-connector-fill"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.step}
                            className={`hiw-step ${step.accent}`}
                            variants={stepVariants}
                            whileHover={{ y: -6, transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] } }}
                        >
                            <div className="hiw-step-num">{step.step}</div>
                            <div className={`hiw-step-icon-wrap ${step.accent}`}>
                                {step.icon}
                            </div>
                            <h3 className="hiw-step-title">{step.title}</h3>
                            <p className="hiw-step-desc">{step.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Multi-channel bar */}
                <motion.div
                    className="hiw-channels"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <span className="hiw-channel-label">Reach us on</span>
                    <div className="hiw-channel-sep" />
                    {channels.map((ch) => (
                        <motion.span
                            key={ch.label}
                            className="hiw-channel-chip"
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.15 }}
                        >
                            {ch.icon}
                            {ch.label}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
