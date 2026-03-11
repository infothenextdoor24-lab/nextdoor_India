import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
    RiCheckLine,
    RiFlashlightLine,
    RiBuildingLine,
    RiArrowRightLine,
    RiMailLine,
} from 'react-icons/ri'
import './Pricing.css'

const plans = [
    {
        id: 'free',
        label: 'Free',
        icon: <RiCheckLine size={20} />,
        price: '₹0',
        period: 'forever',
        tagline: 'For every Indian founder',
        highlight: false,
        features: [
            'Program & grant alerts',
            'Startup resource library',
            'Peer community access',
            'Basic incubator directory',
            'Newsletter & podcast',
        ],
        cta: 'Get Started Free',
        ctaIcon: <RiArrowRightLine size={16} />,
        ctaStyle: 'btn-secondary',
    },
    {
        id: 'paid',
        label: 'Growth',
        icon: <RiFlashlightLine size={20} />,
        price: '₹300',
        period: '/month',
        tagline: 'For founders serious about scale',
        highlight: true,
        badge: 'Most Popular',
        features: [
            'Everything in Free',
            'Personalised mentorship',
            'Pitch deck review',
            'Business model feedback',
            'Fast-track incubator connects',
            'Co-founder matching',
            'Priority program alerts',
        ],
        cta: 'Start Growth Plan',
        ctaIcon: <RiArrowRightLine size={16} />,
        ctaStyle: 'btn-primary',
    },
    {
        id: 'enterprise',
        label: 'Institutional',
        icon: <RiBuildingLine size={20} />,
        price: 'Custom',
        period: '',
        tagline: 'For incubators, colleges & CSR',
        highlight: false,
        features: [
            'Startup pipeline access',
            'Batch mentorship sessions',
            'Corporate CSR tie-ups',
            'Co-branding & visibility',
            'Dedicated account manager',
            'Impact reporting',
        ],
        cta: 'Contact Us',
        ctaIcon: <RiMailLine size={16} />,
        ctaStyle: 'btn-secondary',
    },
]

export default function Pricing() {
    return (
        <section className="section pricing-section" id="pricing">
            <div className="container">
                <div className="section-head">
                    <span className="section-label">Pricing</span>
                    <h2 className="pricing-headline">
                        Free to start.<br />
                        <span className="text-red">Powerful to grow.</span>
                    </h2>
                    <p className="pricing-sub">
                        A freemium model designed so no founder is priced out of opportunity.
                    </p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            className={`pricing-card ${plan.highlight ? 'pricing-card-highlight' : ''}`}
                            id={`plan-${plan.id}`}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -6, transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] } }}
                        >
                            {plan.badge && (
                                <div className="pricing-badge">{plan.badge}</div>
                            )}

                            <div className="pricing-top">
                                <div className={`pricing-icon ${plan.highlight ? 'pricing-icon-light' : ''}`}>
                                    {plan.icon}
                                </div>
                                <div className="pricing-label">{plan.label}</div>
                            </div>

                            <div className="pricing-price">
                                <span className="pricing-amount">{plan.price}</span>
                                {plan.period && <span className="pricing-period">{plan.period}</span>}
                            </div>
                            <p className="pricing-tagline">{plan.tagline}</p>

                            <div className="pricing-divider" />

                            <ul className="pricing-features">
                                {plan.features.map((f) => (
                                    <li key={f}>
                                        <span className={`pricing-check ${plan.highlight ? 'check-light' : ''}`}>
                                            <RiCheckLine size={12} />
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`btn ${plan.ctaStyle} pricing-cta`}
                                id={`btn-plan-${plan.id}`}
                            >
                                {plan.cta}
                                {plan.ctaIcon}
                            </button>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="pricing-note"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <RiFlashlightLine size={16} className="note-icon" />
                    Future: <strong>Institutional partnerships</strong> · <strong>Corporate CSR support</strong> · <strong>Premium mentorship marketplace</strong>
                </motion.div>
            </div>
        </section>
    )
}
