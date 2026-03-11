import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Audience from './components/Audience'
import Pricing from './components/Pricing'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
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
                <Solution />
                <HowItWorks />
                <Features />
                <Audience />
                <Pricing />
                <Roadmap />
                <Team />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
