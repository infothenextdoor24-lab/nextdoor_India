import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    RiSearchEyeLine,
    RiMapPinLine,
    RiCompassDiscoverLine,
    RiAlertLine,
} from 'react-icons/ri'
import './Problem.css'

const problems = [
    {
        number: '01',
        icon: <RiSearchEyeLine size={28} />,
        title: 'No Awareness',
        desc: 'Founders in Tier 2/3 cities and rural areas have little to no knowledge about available incubators, grants, and mentorship programs.',
    },
    {
        number: '02',
        icon: <RiMapPinLine size={28} />,
        title: 'Ecosystem Gap',
        desc: "India's startup ecosystem is heavily concentrated in metros. Small-town innovators are left out of the conversation entirely.",
    },
    {
        number: '03',
        icon: <RiCompassDiscoverLine size={28} />,
        title: 'No Clear Path',
        desc: 'Even motivated founders lack a structured roadmap to navigate funding, capacity building, or expert mentorship access.',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
}

export default function Problem() {
    const headRef = useRef(null)
    const gridRef = useRef(null)
    const headInView = useInView(headRef, { once: true, margin: '-60px' })
    const gridInView = useInView(gridRef, { once: true, margin: '-60px' })

    return (
        <section className="section problem-section" id="problem">
            <div className="container">
                <motion.div
                    ref={headRef}
                    className="section-head"
                    initial={{ opacity: 0, y: 30 }}
                    animate={headInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55 }}
                >
                    <span className="section-label">The Problem</span>
                    <h2 className="problem-headline">
                        Most of India's startup ecosystem<br />
                        is <span className="text-red">invisible</span> to grassroots founders.
                    </h2>
                    <p className="problem-subtext">
                        Startups across India struggle to access support — not because opportunities
                        don't exist, but because they are impossible to find from the margins.
                    </p>
                </motion.div>

                <motion.div
                    ref={gridRef}
                    className="problem-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={gridInView ? 'visible' : 'hidden'}
                >
                    {problems.map((p) => (
                        <motion.div key={p.number} className="problem-card" variants={itemVariants}>
                            <div className="problem-card-inner">
                                <div className="problem-header">
                                    <span className="problem-number">{p.number}</span>
                                    <div className="problem-icon">{p.icon}</div>
                                </div>
                                <h3 className="problem-title">{p.title}</h3>
                                <p className="problem-desc">{p.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom bar */}
                <motion.div
                    className="problem-bar"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="problem-bar-icon-wrap">
                        <RiAlertLine size={22} />
                    </div>
                    <p>
                        <strong>The result?</strong> Tremendous potential left untapped — especially in{' '}
                        <strong>Northeast India</strong>, Tier 2 &amp; Tier 3 towns, and rural innovation hubs.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
