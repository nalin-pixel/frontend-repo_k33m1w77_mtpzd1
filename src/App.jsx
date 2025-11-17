import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function SectionDivider() {
  return <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Resume />
        <CTA />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
