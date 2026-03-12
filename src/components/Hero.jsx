import React from 'react'
import { motion } from 'framer-motion'
import {
    RiArrowRightLine,
    RiPlayCircleLine,
    RiNotification3Line,
    RiUserStarLine,
    RiArrowRightUpLine,
    RiCheckboxCircleLine,
    RiTimeLine,
    RiRobot2Line,
} from 'react-icons/ri'
import './Hero.css'

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const heroCards = [
    {
        icon: RiNotification3Line,
        title: 'Grant & Program Alerts',
        desc: 'Real-time, verified updates on incubation & accelerator programs across India.',
        badge: { text: 'Live', icon: RiCheckboxCircleLine, cls: 'badge-live' },
        accent: 'card-accent-red',
    },
    {
        icon: RiUserStarLine,
        title: 'Mentor & Investor Connect',
        desc: 'One-on-one founder support with domain experts and investors.',
        badge: { text: 'Match found', icon: RiCheckboxCircleLine, cls: 'badge-match' },
        accent: 'card-accent-neutral',
    },
    {
        icon: RiRobot2Line,
        title: 'Validate Idea',
        desc: 'Use Valido, our multi-layered AI agent, to validate your idea.',
        badge: { text: 'AI Agent', icon: RiRobot2Line, cls: 'badge-ready' },
        accent: 'card-accent-dim',
    },
]

const stats = [
    { number: '1000+', label: 'Target Startups' },
    { number: '10+', label: 'Incubator Partners' },
    { number: 'NE India', label: 'Primary Focus' },
]

export default function Hero() {
    return (
        <section className="hero" id="home">
            {/* Background */}
            <div className="hero-bg">
                <div className="hero-grid" />
                <div className="hero-blob hero-blob-1" />
                <div className="hero-blob hero-blob-2" />
                <div className="hero-blob hero-blob-3" />
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
                            Bringing the Startup Ecosystem to the{' '}
                            <span className="highlight">Doorstep</span>{' '}
                            of Colleges in Small-Town India.
                        </motion.h1>

                        <motion.p className="hero-tagline" {...fadeUp(0.34)}>
                            We bridge the gap between{' '}
                            <strong>grassroots founders</strong>{' '}and India's best
                            incubators, grants &amp; mentorship — wherever you are.
                        </motion.p>

                        <motion.div className="hero-actions" {...fadeUp(0.46)}>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLScgdCWzHAKl1SGP-ukPT8fI5FehTldIjy7b5NToZS4PcytJ7A/viewform?usp=publish-editor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg hero-cta-primary"
                                id="hero-apply-btn"
                            >
                                Register Now
                                <RiArrowRightLine size={18} />
                            </a>
                            <a
                                href="#how-it-works"
                                className="btn btn-ghost btn-lg"
                                id="hero-learn-btn"
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                            >
                                <RiPlayCircleLine size={18} />
                                How It Works
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Glass cards */}
                    <div className="hero-visual">
                        {heroCards.map((card, i) => {
                            const Icon = card.icon
                            const BadgeIcon = card.badge.icon
                            return (
                                <motion.div
                                    key={card.title}
                                    className={`hero-card ${card.accent}`}
                                    initial={{ opacity: 0, x: 40, y: i * 10 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        y: i === 0 ? -8 : i === 2 ? 8 : 0,
                                    }}
                                    transition={{
                                        duration: 0.75,
                                        delay: 0.45 + i * 0.14,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                    whileHover={{
                                        y: i === 0 ? -16 : i === 2 ? 2 : -6,
                                        scale: 1.02,
                                        transition: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] },
                                    }}
                                >
                                    {/* Glass shimmer overlay */}
                                    <div className="card-shimmer" />

                                    <div className="hero-card-top">
                                        <div className="hero-card-icon-wrap">
                                            <Icon size={18} />
                                        </div>
                                        <span className={`hero-card-badge ${card.badge.cls}`}>
                                            <BadgeIcon size={11} />
                                            {card.badge.text}
                                        </span>
                                    </div>

                                    <h4 className="hero-card-title">{card.title}</h4>
                                    <p className="hero-card-desc">{card.desc}</p>

                                    <div className="hero-card-footer">
                                        <span className="hero-card-link">
                                            Learn more <RiArrowRightUpLine size={11} />
                                        </span>
                                        <div className="hero-card-line" />
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
