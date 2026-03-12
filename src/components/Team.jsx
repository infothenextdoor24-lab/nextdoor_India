import React from 'react'
import { motion } from 'framer-motion'
import {
    RiLinkedinBoxLine,
    RiUserStarLine,
    RiRocketLine,
    RiHeartLine,
} from 'react-icons/ri'
import './Team.css'

const team = [
    {
        id: 'anup',
        name: 'Anup Medhi',
        role: 'Co-Founder',
        initials: 'AM',
        avatarCls: 'avatar-red',
        skills: [
            'Startup Ecosystem Building',
            'Community Design',
            'UX/UI Design',
            'Team Building',
            'Project Management',
        ],
        tagline: 'Designing the ecosystem that should have existed.',
        linkedin: '#',
    },
    {
        id: 'mriganka',
        name: 'Mriganka Barua',
        role: 'Co-Founder',
        initials: 'MB',
        avatarCls: 'avatar-dark',
        skills: [
            'Marketing',
            'Community Building',
            'Brand Building',
            'Sales',
            'Team Building',
        ],
        tagline: 'Building for the founder no one else looked at.',
        linkedin: '#',
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
}

export default function Team() {
    return (
        <section className="section team-section" id="team">
            <div className="container">
                <div className="section-head">
                    <span className="section-label">The Team</span>
                    <h2 className="team-headline">
                        Two founders.<br />
                        <span className="text-red">One mission.</span>
                    </h2>
                    <p className="team-sub">
                        Built by people who understand what it means to be left out of India's
                        startup conversation.
                    </p>
                </div>

                <div className="team-grid">
                    {team.map((member, i) => (
                        <motion.div
                            key={member.id}
                            className="team-card"
                            id={`team-${member.id}`}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ y: -6, transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] } }}
                        >
                            <div className="team-card-top">
                                <div className={`team-avatar ${member.avatarCls}`}>
                                    {member.initials}
                                </div>
                                <div className="team-identity">
                                    <h3 className="team-name">{member.name}</h3>
                                    <div className="team-role-wrap">
                                        <RiUserStarLine size={12} />
                                        <span className="team-role">{member.role}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="team-quote-block">
                                <p className="team-tagline">"{member.tagline}"</p>
                            </div>

                            <div className="team-skills">
                                {member.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        className="team-skill-chip"
                                        whileHover={{ scale: 1.05, y: -1 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>

                            <div className="team-card-footer">
                                <a
                                    href={member.linkedin}
                                    className="team-linkedin"
                                    id={`linkedin-${member.id}`}
                                >
                                    <RiLinkedinBoxLine size={18} />
                                    <span>Connect on LinkedIn</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Join callout */}
                <motion.div
                    className="team-join"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="team-join-icon"><RiHeartLine size={22} /></div>
                    <div className="team-join-text">
                        <p>
                            <strong>We're looking for mentors, advisors &amp; passionate volunteers.</strong>
                            <br />
                            If you believe in equitable access to India's startup ecosystem, let's talk.
                        </p>
                    </div>
                    <a
                        href="mailto:hello@thenextdoorindia.com"
                        className="btn btn-secondary team-join-btn"
                    >
                        <RiRocketLine size={16} />
                        Join Our Mission
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
