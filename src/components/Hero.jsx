import React from 'react'
import { motion } from 'framer-motion'
import {
    RiArrowRightLine,
    RiPlayCircleLine,
    RiShieldCheckLine,
    RiBellLine,
    RiUserHeartLine,
    RiArrowRightUpLine,
} from 'react-icons/ri'
import './Hero.css'

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const heroCards = [
    {
        icon: <RiBellLine size={20} />,
        iconClass: 'icon-red',
        title: 'Grant & Program Alerts',
        desc: 'Real-time, verified updates on incubation programs',
        badge: { text: '● Live', cls: 'badge-green' },
        main: true,
    },
    {
        icon: <RiUserHeartLine size={20} />,
        iconClass: 'icon-black',
        title: 'Mentor Connect',
        desc: 'One-on-one founder support',
        badge: { text: '⚡ Match found', cls: 'badge-blue' },
    },
    {
        icon: <RiShieldCheckLine size={20} />,
        iconClass: 'icon-red',
        title: 'Pitch Refinement',
        desc: 'Deck, business plan & model review',
        badge: { text: '✓ Ready', cls: 'badge-green' },
    },
]

const stats = [
    { number: '1000+', label: 'Target Startups' },
    { number: '10+', label: 'Incubator Partners' },
    { number: 'NE India', label: 'Primary Focus' },
]

export default function Hero() {
    return (
        <section className="hero noise" id="home">
            {/* Background */}
            <div className="hero-bg">
                <div className="hero-grid" />
                <div className="hero-blob hero-blob-1" />
                <div className="hero-blob hero-blob-2" />
            </div>

            <div className="hero-content">
                <div className="hero-inner">
                    {/* Left: Text */}
                    <div className="hero-text">
                        <motion.div {...fadeUp(0.1)}>
                            <div className="hero-badge">
                                <span className="hero-badge-dot" />
                                Now Onboarding Startups across India
                            </div>
                        </motion.div>

                        <motion.h1 className="hero-headline" {...fadeUp(0.22)}>
                            Bringing Incubation to the{' '}
                            <span className="highlight">Doorstep</span>{' '}
                            of Small-Town India.
                        </motion.h1>

                        <motion.p className="hero-tagline" {...fadeUp(0.34)}>
                            We bridge the gap between{' '}<strong>grassroots founders</strong>{' '}and India's
                            best incubators, grants, and mentorship — wherever you are.
                        </motion.p>

                        <motion.div className="hero-actions" {...fadeUp(0.46)}>
                            <a
                                href="#contact"
                                className="btn btn-primary btn-lg hero-cta-primary"
                                id="hero-apply-btn"
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                            >
                                Apply Now
                                <RiArrowRightLine size={18} />
                            </a>
                            <a
                                href="#solution"
                                className="btn btn-secondary btn-lg"
                                id="hero-learn-btn"
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.querySelector('#solution')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                            >
                                <RiPlayCircleLine size={18} />
                                How It Works
                            </a>
                        </motion.div>

                        <motion.div className="hero-stats" {...fadeUp(0.56)}>
                            {stats.map((s, i) => (
                                <div key={i} className="hero-stat">
                                    <span className="hero-stat-number">{s.number}</span>
                                    <span className="hero-stat-label">{s.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Visual cards */}
                    <div className="hero-visual">
                        {heroCards.map((card, i) => (
                            <motion.div
                                key={card.title}
                                className={`hero-card ${card.main ? 'hero-card-main' : ''}`}
                                initial={{ opacity: 0, x: 50, y: i * 8 }}
                                animate={{ opacity: 1, x: 0, y: i % 2 === 0 ? -6 : 6 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.5 + i * 0.12,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                whileHover={{ y: i % 2 === 0 ? -12 : 0, scale: 1.02, transition: { duration: 0.2 } }}
                            >
                                <div className="hero-card-top">
                                    <div className={`hero-card-icon ${card.iconClass}`}>
                                        {card.icon}
                                    </div>
                                    <span className={`hero-card-badge ${card.badge.cls}`}>
                                        {card.badge.text}
                                    </span>
                                </div>
                                <h4>{card.title}</h4>
                                <p>{card.desc}</p>
                                <div className="hero-card-link">
                                    Learn more <RiArrowRightUpLine size={12} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
