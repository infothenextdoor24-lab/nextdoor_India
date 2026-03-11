import React from 'react'
import './Footer.css'

const Logo = () => (
    <div className="footer-logo">
        <div className="logo-mark">
            <div className="logo-sq logo-sq-tl" />
            <div className="logo-sq logo-sq-br" />
        </div>
        <div className="logo-wordmark">
            <span className="logo-the">THE</span>
            <span className="logo-main">NEXT DOOR</span>
        </div>
    </div>
)

const footerLinks = {
    Platform: ['Features', 'Pricing', 'Roadmap', 'Apply Now'],
    Company: ['About', 'Team', 'Blog', 'Press'],
    Resources: ['Pitch Templates', 'Grant Guide', 'Startup Canvas', 'Podcast'],
    Connect: ['Email', 'WhatsApp', 'LinkedIn', 'Instagram'],
}

export default function Footer() {
    const scrollTo = (id) => {
        const el = document.querySelector(`#${id.toLowerCase().replace(/\s/g, '-')}`)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    {/* Brand col */}
                    <div className="footer-brand">
                        <Logo />
                        <p className="footer-tagline">
                            Bringing Incubation to the<br />
                            Doorsteps of Small-Town India.
                        </p>
                        <div className="footer-social">
                            {['LinkedIn', 'Instagram', 'Twitter'].map((s) => (
                                <a key={s} href="#" className="footer-social-link" aria-label={s}>
                                    {s[0]}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([group, links]) => (
                        <div key={group} className="footer-col">
                            <h4 className="footer-col-title">{group}</h4>
                            <ul>
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="footer-link" onClick={(e) => { e.preventDefault() }}>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="footer-divider" />

                <div className="footer-bottom">
                    <p className="footer-copy">
                        © 2025 The Next Door India. All rights reserved.
                    </p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                    <p className="footer-made">
                        Made with ❤️ for India's grassroots founders
                    </p>
                </div>
            </div>
        </footer>
    )
}
