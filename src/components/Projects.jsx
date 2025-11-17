import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Disease Prediction using Machine Learning',
    desc: 'Developed ML models to predict diseases based on health data inputs.',
    tags: ['Classification', 'Healthcare', 'Python'],
  },
  {
    title: 'AI Chatbot Development',
    desc: 'Built an AI assistant capable of answering structured and contextual queries using NLP.',
    tags: ['NLP', 'Chatbot', 'APIs'],
  },
  {
    title: 'E-Waste Footprint Calculator',
    desc: 'Designed a sustainability-focused web app to measure electronic waste footprint.',
    tags: ['Sustainability', 'Web App'],
  },
  {
    title: 'Student Marks Prediction',
    desc: 'Created regression-based models to predict academic performance trends.',
    tags: ['Regression', 'Visualization'],
  },
  {
    title: 'AI-based Personal Productivity Manager',
    desc: 'An intelligent dashboard for time and task management.',
    tags: ['Automation', 'Dashboard'],
  },
  {
    title: 'College Information Chatbot',
    desc: 'Agent that automates queries related to East West Institute of Technology.',
    tags: ['Chatbot', 'College'],
  },
]

function Card({ p }) {
  return (
    <div className="group rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_10px_30px_rgba(2,6,23,0.06)] p-6 transition hover:shadow-[0_20px_40px_rgba(2,6,23,0.12)] hover:-translate-y-0.5">
      <h4 className="text-lg font-semibold text-slate-900">{p.title}</h4>
      <p className="mt-2 text-sm text-slate-700">{p.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">{t}</span>
        ))}
      </div>
      <div className="mt-5">
        <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-800">View Project →</a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">Projects</h3>
            <p className="mt-2 text-slate-600">Selected work across AI, ML, and analytics.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-4 py-2 font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition">Hire Me</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <Card p={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
