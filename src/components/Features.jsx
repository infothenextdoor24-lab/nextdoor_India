import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    RiSearchEyeLine,
    RiBellLine,
    RiUserHeartLine,
    RiPresentationLine,
    RiBuildingLine,
    RiGroupLine,
    RiBookOpenLine,
    RiRobot2Line,
    RiArrowDownSLine,
} from 'react-icons/ri'
import './Features.css'

const features = [
    {
        id: 'discovery',
        icon: <RiSearchEyeLine size={26} />,
        title: 'Startup Discovery & Segmentation',
        desc: 'We segment startups by stage, domain, region, and need — ensuring you land in the right programs without the noise.',
        tag: 'Core',
    },
    {
        id: 'alerts',
        icon: <RiBellLine size={26} />,
        title: 'Grant & Program Alerts',
        desc: 'Never miss a deadline. Real-time, verified alerts for DPIIT programs, BIRAC grants, state-level schemes, and private calls.',
        tag: 'Real-time',
    },
    {
        id: 'support',
        icon: <RiUserHeartLine size={26} />,
        title: 'One-on-One Founder Support',
        desc: 'Direct, personal engagement. Our team invests in your story — not a bot, not a form, a real conversation.',
        tag: 'Human-first',
    },
    {
        id: 'pitch',
        icon: <RiPresentationLine size={26} />,
        title: 'Pitch & Business Model Refinement',
        desc: 'Structured review of your pitch deck, business model canvas, and financial projections — tailored to Indian VC expectations.',
        tag: 'Premium',
    },
    {
        id: 'matching',
        icon: <RiBuildingLine size={26} />,
        title: 'Incubator Matching',
        desc: 'We map you to the right incubator based on your domain, stage, and geography — from IIT labs to state-run innovation centres.',
        tag: 'Core',
    },
    {
        id: 'community',
        icon: <RiGroupLine size={26} />,
        title: 'Peer Community Access',
        desc: 'A curated network of grassroots founders sharing knowledge, resources, co-founder leads, and moral support.',
        tag: 'Free',
    },
    {
        id: 'resources',
        icon: <RiBookOpenLine size={26} />,
        title: 'Startup Learning Resources',
        desc: 'From pitch templates to legal guides, funding cheatsheets to business model canvas — your toolkit for the journey ahead.',
        tag: 'Free',
    },
    {
        id: 'ai',
        icon: <RiRobot2Line size={26} />,
        title: 'AI Recommendation Engine',
        desc: 'Coming Q1 2026 — intelligent program and mentor matching powered by AI, tailored to your startup profile and goals.',
        tag: 'Coming Soon',
        comingSoon: true,
    },
]

const tagColors = {
    'Core': 'tag-core',
    'Real-time': 'tag-realtime',
    'Human-first': 'tag-human',
    'Premium': 'tag-premium',
    'Free': 'tag-free',
    'Coming Soon': 'tag-soon',
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Features() {
    const [active, setActive] = useState(null)

    return (
        <section className="section features-section" id="features">
            <div className="container">
                <div className="section-head">
                    <span className="section-label">Features & Offerings</span>
                    <h2 className="features-headline">
                        Everything a founder needs,<br />
                        <span className="text-red">in one place.</span>
                    </h2>
                    <p className="features-sub">
                        Built specifically for underserved founders — not Silicon Valley unicorns.
                    </p>
                </div>

                <motion.div
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {features.map((f) => (
                        <motion.div
                            key={f.id}
                            className={`feature-card ${active === f.id ? 'feature-card-active' : ''} ${f.comingSoon ? 'feature-card-soon' : ''}`}
                            id={`feature-${f.id}`}
                            variants={cardVariants}
                            onClick={() => setActive(active === f.id ? null : f.id)}
                            whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] } }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="feature-card-top">
                                <div className={`feature-icon-wrap ${active === f.id ? 'icon-active' : ''}`}>
                                    {f.icon}
                                </div>
                                <span className={`feature-tag ${tagColors[f.tag] || ''}`}>{f.tag}</span>
                            </div>
                            <h3 className="feature-title">{f.title}</h3>

                            <AnimatePresence initial={false}>
                                {active === f.id
                                    ? (
                                        <motion.p
                                            className="feature-desc-expanded"
                                            key="expanded"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
                                        >
                                            {f.desc}
                                        </motion.p>
                                    ) : (
                                        <p className="feature-desc-static">{f.desc}</p>
                                    )
                                }
                            </AnimatePresence>

                            <div className={`feature-expand-btn ${active === f.id ? 'expanded' : ''}`}>
                                <RiArrowDownSLine size={16} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
