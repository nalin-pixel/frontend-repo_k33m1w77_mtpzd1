import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Award, Users } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl p-6 bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center shadow-md">
                <Users size={20} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">Soft Skills</h4>
            </div>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
              <li>Leadership & Team Collaboration</li>
              <li>Problem Solving & Critical Thinking</li>
              <li>Communication & Presentation</li>
              <li>Time Management & Adaptability</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-2xl p-6 bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center shadow-md">
                <Award size={20} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">Certifications</h4>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>Generative AI by Microsoft and LinkedIn</li>
              <li>AI Tools Masterclass by Al Chronicles</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-5 py-3 font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition">
            <FileText size={18} /> Download Resume
          </a>
          <p className="text-sm text-slate-500">Updated upon request.</p>
        </div>
      </div>
    </section>
  )
}
