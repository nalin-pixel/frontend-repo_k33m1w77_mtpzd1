import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(2,6,23,0.06)] p-6">
              <h3 className="text-2xl font-bold text-slate-900">About</h3>
              <p className="mt-3 text-slate-700">“As a final-year B.E. student at East West Institute of Technology, I’ve developed strong proficiency in Python, AI, and machine learning. My work revolves around transforming complex data into intelligent insights through automation, analytics, and visualization. My experience ranges from creating ML-based prediction systems to building chatbot and API-integrated AI tools. I strive to combine practical engineering with design thinking to deliver solutions that are both functional and elegant.”</p>
            </div>
          </div>
          <div className="lg:col-span-7 grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(2,6,23,0.06)] p-6"
            >
              <h4 className="text-lg font-semibold text-slate-900">Education</h4>
              <ul className="mt-3 space-y-3 text-slate-700">
                <li>
                  <p className="font-medium text-slate-900">B.E. in Information Science and Engineering</p>
                  <p className="text-sm">East West Institute of Technology, Bengaluru — 7th Semester, GPA 7.6 (Pursuing)</p>
                </li>
                <li>
                  <p className="font-medium text-slate-900">Diploma in Computer Science</p>
                  <p className="text-sm">Sri Dattaiah Memorial PU College, Bidar — 72% (2020–2022)</p>
                </li>
                <li>
                  <p className="font-medium text-slate-900">High School</p>
                  <p className="text-sm">Guru Nanak High School, Bidar — 74% (2020)</p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(2,6,23,0.06)] p-6"
            >
              <h4 className="text-lg font-semibold text-slate-900">Experience</h4>
              <ul className="mt-3 space-y-3 text-slate-700">
                <li>
                  <p className="font-medium text-slate-900">Virtual Internship – TATA iQ (Sept–Oct 2024)</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Completed a self-paced virtual internship on Data Visualization: Empowering Business with Effective Insights.</li>
                    <li>Designed visual dashboards and communicated insights to drive data-based decisions.</li>
                    <li>Strengthened practical knowledge in business analytics and data presentation.</li>
                  </ul>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
