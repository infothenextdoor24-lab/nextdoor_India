import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    RiRadarLine,
    RiMedalLine,
    RiMoneyDollarCircleLine,
    RiBuildingLine,
    RiBookOpenLine,
    RiTeamLine,
    RiArrowRightLine,
} from 'react-icons/ri'
import './Solution.css'

const features = [
    {
        icon: <RiRadarLine size={22} />,
        title: 'Real-time Program Alerts',
        desc: 'Verified updates on grants, competitions & incubation programs delivered directly to founders.',
    },
    {
        icon: <RiMedalLine size={22} />,
        title: 'Personalised Mentorship',
        desc: 'Curated one-on-one guidance on pitch decks, business plans, and growth strategy.',
    },
    {
        icon: <RiMoneyDollarCircleLine size={22} />,
        title: 'Funding Access',
        desc: 'Mapped pathways to grants, angel networks, and co-founder matching.',
    },
    {
        icon: <RiBuildingLine size={22} />,
        title: 'Incubator Matching',
        desc: 'We connect you with the right incubator or accelerator based on your stage and domain.',
    },
    {
        icon: <RiBookOpenLine size={22} />,
        title: 'Startup Resources',
        desc: 'Pitch templates, business model canvas, legal guides, and a growing resource library.',
    },
    {
        icon: <RiTeamLine size={22} />,
        title: 'Peer Community',
        desc: 'Join a network of grassroots founders building alongside you across India.',
    },
]

const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const listItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Solution() {
    const ref = useRef(null)
    const listRef = useRef(null)
    const inView = useInView(ref, { once: true })
    const listInView = useInView(listRef, { once: true, margin: '-60px' })

    return (
        <section className="section solution-section" id="solution">
            <div className="container">
                <div className="solution-layout">
                    {/* Left — sticky label + headline */}
                    <motion.div
                        ref={ref}
                        className="solution-left"
                        initial={{ opacity: 0, x: -28 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <span className="section-label">Our Solution</span>
                        <h2 className="solution-headline">
                            One platform.<br />
                            Every tool a<br />
                            founder needs.
                        </h2>
                        <p className="solution-desc">
                            The Next Door India is not just a discovery portal — it's a full support
                            system for startup founders who've been left at the margins of India's
                            growing ecosystem.
                        </p>

                        <div className="solution-pill-row">
                            <span className="tag tag-red">Free Tier Available</span>
                            <span className="tag">No metro bias</span>
                            <span className="tag">NE India focus</span>
                        </div>

                        <div className="solution-divider" />

                        <div className="solution-quote">
                            <div className="quote-mark">"</div>
                            <p>Bridging the gap between Startups &amp; Incubators in India.</p>
                        </div>

                        <motion.a
                            href="#contact"
                            className="btn btn-primary solution-cta"
                            initial={{ opacity: 0, y: 12 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Apply Now <RiArrowRightLine />
                        </motion.a>
                    </motion.div>

                    {/* Right — feature list */}
                    <motion.div
                        ref={listRef}
                        className="solution-right"
                        variants={listVariants}
                        initial="hidden"
                        animate={listInView ? 'visible' : 'hidden'}
                    >
                        {features.map((f) => (
                            <motion.div
                                key={f.title}
                                className="solution-feature"
                                variants={listItemVariants}
                                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                            >
                                <div className="solution-feature-icon">
                                    {f.icon}
                                </div>
                                <div className="solution-feature-text">
                                    <h4 className="solution-feature-title">{f.title}</h4>
                                    <p className="solution-feature-desc">{f.desc}</p>
                                </div>
                                <div className="solution-feature-arrow">
                                    <RiArrowRightLine size={16} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
