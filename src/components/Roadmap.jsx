import React from 'react'
import { motion } from 'framer-motion'
import {
    RiCheckLine,
    RiFlashlightLine,
    RiArrowRightLine,
    RiTimeLine,
    RiShieldLine,
    RiBuildingLine,
} from 'react-icons/ri'
import './Roadmap.css'

const milestones = [
    {
        quarter: 'Q3 2025',
        phase: 'Launch',
        status: 'current',
        icon: <RiFlashlightLine size={18} />,
        items: [
            'Launch MVP platform — dashboard + alerts',
            'Build startup intake pipeline (form + CRM)',
            'Onboard first 100 startups',
        ],
    },
    {
        quarter: 'Q4 2025',
        phase: 'Growth',
        status: 'upcoming',
        icon: <RiTimeLine size={18} />,
        items: [
            'Partner with 10+ incubators & colleges',
            'Launch founder community (WhatsApp/Slack)',
            'Introduce subscription tier + mentor onboarding',
        ],
    },
    {
        quarter: 'Q1–Q2 2026',
        phase: 'Scale',
        status: 'future',
        icon: <RiBuildingLine size={18} />,
        items: [
            'Roll out the mobile app version',
            'Run virtual demo days & pitch clinics',
            'Integrate AI recommendation engine',
            'Expand to 1000+ startups across India',
        ],
    },
]

const statusConfig = {
    current: { label: 'In Progress', labelCls: 'status-green', dotCls: 'dot-red' },
    upcoming: { label: 'Upcoming', labelCls: 'status-orange', dotCls: 'dot-dark' },
    future: { label: 'Planned', labelCls: 'status-gray', dotCls: 'dot-gray' },
}

export default function Roadmap() {
    return (
        <section className="section roadmap-section" id="roadmap">
            <div className="container">
                <div className="section-head">
                    <span className="section-label">Roadmap</span>
                    <h2 className="roadmap-headline">
                        12–18 months to<br />
                        <span className="text-red">rewriting the playbook.</span>
                    </h2>
                    <p className="roadmap-sub">
                        A phased rollout that starts lean, builds community, and scales with confidence.
                    </p>
                </div>

                <div className="roadmap-track">
                    {/* Timeline line */}
                    <div className="roadmap-line">
                        <motion.div
                            className="roadmap-line-fill"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                        />
                    </div>

                    <div className="roadmap-phases">
                        {milestones.map((m, i) => {
                            const cfg = statusConfig[m.status]
                            return (
                                <motion.div
                                    key={m.quarter}
                                    className={`roadmap-phase ${m.status === 'current' ? 'roadmap-phase-active' : ''}`}
                                    initial={{ opacity: 0, y: 36 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.55, delay: i * 0.14 }}
                                    whileHover={{ y: -5, transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] } }}
                                >
                                    <div className={`roadmap-dot ${cfg.dotCls}`}>
                                        {m.icon}
                                    </div>
                                    <div className="roadmap-phase-body">
                                        <div className="roadmap-phase-top">
                                            <span className={`roadmap-status ${cfg.labelCls}`}>{cfg.label}</span>
                                            <span className="roadmap-quarter">{m.quarter}</span>
                                        </div>
                                        <h3 className="roadmap-phase-title">{m.phase}</h3>
                                        <ul className="roadmap-items">
                                            {m.items.map((item) => (
                                                <li key={item}>
                                                    <span className="roadmap-check-icon"><RiCheckLine size={12} /></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="roadmap-cta"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55 }}
                >
                    <div className="roadmap-cta-icon"><RiShieldLine size={24} /></div>
                    <div className="roadmap-cta-text">
                        <h4>Want to be part of the first 100?</h4>
                        <p>Early adopters get priority matching, personalised attention, and free Growth access.</p>
                    </div>
                    <motion.a
                        href="#contact"
                        className="btn btn-primary roadmap-cta-btn"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={(e) => {
                            e.preventDefault()
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        Apply as Early Adopter <RiArrowRightLine />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
