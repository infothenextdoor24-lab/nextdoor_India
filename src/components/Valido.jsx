import React from 'react'
import { motion } from 'framer-motion'
import {
    RiRobot2Fill,
    RiBarChartBoxLine,
    RiLightbulbFlashLine,
    RiSearchEyeLine,
    RiSendPlaneFill,
} from 'react-icons/ri'
import './Valido.css'

const features = [
    {
        title: 'Instant Validation',
        desc: 'Test your startup idea against market trends and historical data before writing code.',
        icon: <RiLightbulbFlashLine size={16} />,
    },
    {
        title: 'Deep Logic Analysis',
        desc: 'Uncover hidden loopholes in your business model that standard brainstorming misses.',
        icon: <RiSearchEyeLine size={16} />,
    },
    {
        title: 'Actionable Playbook',
        desc: 'Receive a step-by-step roadmap tailored to your specific idea, market, and resources.',
        icon: <RiBarChartBoxLine size={16} />,
    },
]

export default function Valido() {
    return (
        <section className="section valido-section" id="valido">
            <div className="valido-bg-mesh" />

            <div className="container valido-container">
                <div className="valido-layout">

                    {/* Left Content */}
                    <div className="valido-content">
                        <motion.div
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="valido-badge">
                                <div className="valido-badge-pulse" />
                                Meet Valido
                            </div>

                            <h2 className="valido-title">
                                Don't just build.<br />
                                <span className="valido-title-gradient">Validate first.</span>
                            </h2>

                            <p className="valido-desc">
                                Introducing our multi-layered AI agent designed for founders.
                                Before you commit months to a concept, let Valido analyze your idea,
                                challenge your assumptions, and provide a comprehensive playbook for success.
                            </p>

                            <div className="valido-features">
                                {features.map((feat, i) => (
                                    <motion.div
                                        key={feat.title}
                                        className="valido-feature"
                                        initial={{ opacity: 0, x: -24 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                                    >
                                        <div className="valido-feature-icon">{feat.icon}</div>
                                        <div className="valido-feature-text">
                                            <strong>{feat.title}</strong>
                                            {feat.desc}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <button className="btn btn-primary" style={{ background: 'var(--red)', color: 'var(--white)', border: 'none', boxShadow: '0 8px 24px rgba(229, 50, 50, 0.3)' }}>
                                Join the Waitlist <RiRobot2Fill />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Interactive Visual */}
                    <div className="valido-visual">
                        <div className="valido-card-stack">

                            {/* Card 1 (Back) */}
                            <motion.div
                                className="valido-glass-card valido-card-1"
                                initial={{ opacity: 0, z: -100 }}
                                whileInView={{ opacity: 0.5, z: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            />

                            {/* Card 2 (Middle) */}
                            <motion.div
                                className="valido-glass-card valido-card-2"
                                initial={{ opacity: 0, z: -100 }}
                                whileInView={{ opacity: 0.8, z: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            />

                            {/* Card 3 (Front UI) */}
                            <motion.div
                                className="valido-glass-card valido-card-3"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                            >
                                <div className="valido-ui-header">
                                    <div className="valido-ui-avatar">VA</div>
                                    <div className="valido-ui-title">Valido AI</div>
                                    <div className="valido-ui-status" title="Online" />
                                </div>

                                <div className="valido-ui-chat">
                                    <div className="valido-ui-bubble valido-ui-bubble-user">
                                        I'm thinking of building a hyper-local delivery app for tier-3 cities focused strictly on organic produce.
                                    </div>
                                    <div className="valido-ui-bubble valido-ui-bubble-ai">
                                        Analyzing demographics and supply chain feasibility...
                                        <br /><br />
                                        <strong>Insight:</strong> High potential, but logistics cost is the primary barrier. Let's look at similar models and build a cost analysis matrix before you proceed.
                                    </div>
                                </div>

                                <div className="valido-ui-input">
                                    <span>Type your idea to start validation...</span>
                                    <div className="valido-ui-send">
                                        <RiSendPlaneFill size={12} />
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
