import React from 'react'
import { motion } from 'framer-motion'
import {
    RiGraduationCapLine,
    RiUser3Line,
    RiPlantLine,
    RiSeedlingLine,
    RiArrowRightLine,
    RiMapPin2Line,
} from 'react-icons/ri'
import './Audience.css'

const segments = [
    {
        icon: <RiGraduationCapLine size={22} />,
        title: 'Student Entrepreneurs',
        desc: 'College-level founders with big ideas but limited ecosystem access.',
    },
    {
        icon: <RiUser3Line size={22} />,
        title: 'Solo Founders',
        desc: 'Independent builders navigating the startup world alone — needing co-founder leads and mentors.',
    },
    {
        icon: <RiPlantLine size={22} />,
        title: 'Rural & Semi-urban Innovators',
        desc: 'Local problem-solvers from villages and small towns with unrecognised potential.',
    },
    {
        icon: <RiSeedlingLine size={22} />,
        title: 'First-time Founders',
        desc: 'Grassroots entrepreneurs stepping into startups for the first time, needing structured guidance.',
    },
]

const regions = [
    { label: 'Northeast India', sub: '8 states, untapped potential', highlight: true },
    { label: 'Tier 2 Towns', sub: 'Cities with drive, no support', highlight: false },
    { label: 'Tier 3 Towns', sub: 'Where ideas wait silently', highlight: false },
    { label: 'Incubator-underserved', sub: 'Primary focus regions', highlight: true },
]

const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Audience() {
    return (
        <section className="section audience-section" id="audience">
            <div className="container">
                <div className="audience-layout">
                    {/* Left — segments */}
                    <div className="audience-left">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55 }}
                        >
                            <span className="section-label">Who We Serve</span>
                            <h2 className="audience-headline">
                                Built for founders<br />
                                at the <span className="text-red">margins.</span>
                            </h2>
                            <p className="audience-desc">
                                We're not here to serve the founder who already has ten incubator
                                applications on the table. We're here for{' '}
                                <strong>the rest of India.</strong>
                            </p>
                        </motion.div>

                        <motion.div
                            className="audience-segments"
                            variants={listVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            {segments.map((seg) => (
                                <motion.div
                                    key={seg.title}
                                    className="audience-segment"
                                    variants={itemVariants}
                                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                                >
                                    <div className="audience-seg-icon">{seg.icon}</div>
                                    <div className="audience-seg-text">
                                        <h4 className="audience-seg-title">{seg.title}</h4>
                                        <p className="audience-seg-desc">{seg.desc}</p>
                                    </div>
                                    <RiArrowRightLine className="audience-seg-arrow" size={16} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right — regional focus */}
                    <motion.div
                        className="audience-right"
                        initial={{ opacity: 0, x: 32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.15 }}
                    >
                        <div className="audience-map-card">
                            <div className="audience-map-head">
                                <span className="tag tag-red">Regional Focus</span>
                                <h3>We Empower Entrepreneurs From</h3>
                            </div>

                            <div className="audience-regions">
                                {regions.map((r, i) => (
                                    <motion.div
                                        key={r.label}
                                        className={`audience-region ${r.highlight ? 'region-highlight' : ''}`}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.07 }}
                                        whileHover={{ x: 4 }}
                                    >
                                        <RiMapPin2Line size={16} className={r.highlight ? 'pin-red' : 'pin-gray'} />
                                        <div>
                                            <span className="region-label">{r.label}</span>
                                            <span className="region-sub">{r.sub}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="audience-divider" />

                            <div className="audience-quote-box">
                                <p className="audience-quote">
                                    "India's innovation story will only be complete when the founder
                                    from Dibrugarh gets the same shot as the founder from Delhi."
                                </p>
                                <span className="audience-quote-source">— The Next Door India</span>
                            </div>

                            <div className="audience-india-visual">
                                <div className="india-dot-grid">
                                    {Array.from({ length: 56 }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className={`india-dot ${i % 7 === 0 || i % 11 === 0 ? 'dot-red' : ''}`}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.02 * i, duration: 0.3 }}
                                        />
                                    ))}
                                </div>
                                <div className="india-label">🇮🇳 Across India, starting from the margins</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
