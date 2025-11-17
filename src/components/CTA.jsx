import React from 'react'

export default function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 shadow-[0_20px_50px_rgba(30,64,175,0.25)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">Open to AI + Data roles and collaborations</h3>
              <p className="mt-1 text-blue-100">Let’s build something impactful together.</p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow hover:opacity-95 transition">Get in touch →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
