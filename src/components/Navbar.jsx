import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    RiArrowRightLine,
    RiMenuLine,
    RiCloseLine,
} from 'react-icons/ri'
import './Navbar.css'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Solution', href: '#solution' },
    { label: 'Features', href: '#features' },
    { label: 'Who We Serve', href: '#audience' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Team', href: '#team' },
]

const Logo = () => (
    <a href="#" className="navbar-logo" aria-label="The Next Door India">
        <div className="logo-mark">
            <div className="logo-sq logo-sq-tl" />
            <div className="logo-sq logo-sq-br" />
        </div>
        <div className="logo-wordmark">
            <span className="logo-the">THE</span>
            <span className="logo-main">NEXT DOOR</span>
        </div>
    </a>
)

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id)
                })
            },
            { threshold: 0.35, rootMargin: '-80px 0px -40% 0px' }
        )
        document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
        return () => observer.disconnect()
    }, [])

    const handleNavClick = (href) => {
        setMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <motion.nav
                className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <div className="navbar-inner container">
                    <Logo />

                    <ul className="navbar-links">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <button
                                    className={`navbar-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                                    onClick={() => handleNavClick(link.href)}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="navbar-actions">
                        <button
                            className="btn btn-primary"
                            id="navbar-cta"
                            onClick={() => handleNavClick('#contact')}
                        >
                            Apply Now <RiArrowRightLine />
                        </button>
                        <button
                            className={`hamburger ${menuOpen ? 'open' : ''}`}
                            aria-label="Toggle menu"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {menuOpen
                                    ? <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><RiCloseLine size={20} /></motion.span>
                                    : <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><RiMenuLine size={20} /></motion.span>
                                }
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <ul>
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.label}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                >
                                    <button onClick={() => handleNavClick(link.href)}>
                                        {link.label}
                                    </button>
                                </motion.li>
                            ))}
                            <motion.li initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navLinks.length * 0.04 }}>
                                <button
                                    className="btn btn-primary mobile-apply-btn"
                                    onClick={() => handleNavClick('#contact')}
                                >
                                    Apply Now <RiArrowRightLine />
                                </button>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
