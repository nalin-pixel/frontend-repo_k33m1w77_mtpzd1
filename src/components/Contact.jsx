import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">Let’s connect</h3>
            <p className="mt-2 text-slate-600">Reach out for collaborations, roles, or to discuss a project.</p>

            <div className="mt-6 space-y-3">
              <a href="mailto:nikhiltagare@gmail.com" className="flex items-center gap-3 text-slate-700 hover:text-blue-700">
                <Mail size={18} /> nikhiltagare@gmail.com
              </a>
              <a href="tel:+919980894546" className="flex items-center gap-3 text-slate-700 hover:text-blue-700">
                <Phone size={18} /> +91 9980894546
              </a>
              <a href="https://linkedin.com/in/nikhil-tagare-1342a5258" target="_blank" className="flex items-center gap-3 text-slate-700 hover:text-blue-700" rel="noreferrer">
                <Linkedin size={18} /> linkedin.com/in/nikhil-tagare-1342a5258
              </a>
              <a href="https://github.com/nikhil-tagare" target="_blank" className="flex items-center gap-3 text-slate-700 hover:text-blue-700" rel="noreferrer">
                <Github size={18} /> github.com/nikhil-tagare
              </a>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const data = Object.fromEntries(new FormData(form))
              alert(`Thanks ${data.name}, I will get back to you soon!`)
              form.reset()
            }}
            className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_10px_30px_rgba(2,6,23,0.06)] p-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600">Name</label>
                <input name="name" required className="mt-1 w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-600">Message</label>
              <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-5 py-3 font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
