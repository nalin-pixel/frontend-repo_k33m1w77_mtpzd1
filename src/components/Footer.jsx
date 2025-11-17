import React from 'react'

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_10px_30px_rgba(2,6,23,0.06)] p-6 text-center">
          <p className="text-slate-700">“Building intelligent solutions that make data speak.”</p>
          <p className="mt-2 text-sm text-slate-500">© {new Date().getFullYear()} Nikhil Tagare</p>
        </div>
      </div>
    </footer>
  )
}
