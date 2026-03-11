import React from 'react'
import { motion } from 'framer-motion'
import './Ticker.css'

const items = [
    '🚀 Grant & Program Alerts',
    '🤝 Incubator Matching',
    '💡 Personalised Mentorship',
    '📐 Pitch Deck Review',
    '🌱 Community First',
    '📡 Real-time Updates',
    '🏆 Northeast India Focus',
    '💰 Funding Pathways',
    '🔗 Co-founder Matching',
    '📚 Resource Library',
]

const TickerTrack = ({ direction = 1 }) => (
    <div className="ticker-track">
        <motion.div
            className="ticker-items"
            animate={{ x: direction > 0 ? ['0%', '-50%'] : ['-50%', '0%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
            {[...items, ...items].map((item, i) => (
                <span key={i} className="ticker-item">
                    {item}
                    <span className="ticker-sep" aria-hidden>·</span>
                </span>
            ))}
        </motion.div>
    </div>
)

export default function Ticker() {
    return (
        <div className="ticker-wrapper" aria-hidden="true">
            <TickerTrack direction={1} />
        </div>
    )
}
