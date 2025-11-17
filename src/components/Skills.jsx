import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Cpu, Rocket } from 'lucide-react'

const skills = [
  {
    title: 'Languages',
    icon: Code,
    items: ['Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Data Science & Analysis',
    icon: Database,
    items: ['Machine Learning', 'Data Cleaning', 'Visualization (Matplotlib, Seaborn)', 'Deployment'],
  },
  {
    title: 'AI & Automation',
    icon: Cpu,
    items: ['Generative AI', 'Prompt Engineering', 'Google API', 'Chatbots'],
  },
  {
    title: 'Tools & Platforms',
    icon: Rocket,
    items: ['GitHub', 'Colab', 'Jupyter', 'Power BI', 'Gemini', 'ChatGPT', 'Co-Pilot'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-slate-900">Technical Skills</h3>
        <p className="mt-2 text-slate-600">A balanced stack across data, models, and product.</p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl p-6 bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center shadow-md">
                  <s.icon size={20} />
                </div>
                <h4 className="text-lg font-semibold text-slate-900">{s.title}</h4>
              </div>
              <ul className="mt-4 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="text-sm text-slate-700">{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
