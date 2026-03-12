import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Problem from './components/Problem'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Audience from './components/Audience'
import Pricing from './components/Pricing'
import Valido from './components/Valido'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Ticker />
                <Problem />
                <Features />
                <HowItWorks />
                <Audience />
                <Pricing />
                <Valido />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
