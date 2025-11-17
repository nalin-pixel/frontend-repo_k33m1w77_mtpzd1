import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="py-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Nikhil Tagare
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-2 text-lg sm:text-xl font-medium text-blue-700"
            >
              AI Engineer | Data Scientist | Innovator
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-slate-700 max-w-2xl"
            >
              Analytical and innovation-driven AI & ML engineer passionate about solving real-world problems through data and intelligent systems. Experienced in developing predictive models, interactive dashboards, and AI-driven applications with a focus on clarity, performance, and impact.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-5 py-3 font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition">
                Explore Projects
              </a>
              <a href="#contact" className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold border border-slate-200 hover:shadow-md transition">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
