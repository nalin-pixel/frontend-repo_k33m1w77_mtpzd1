import React from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur-xl bg-white/60 border border-white/40 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
          <nav className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center font-semibold shadow-lg">
                NT
              </div>
              <div className="hidden sm:block">
                <p className="text-sm text-slate-500">Portfolio</p>
                <h1 className="-mt-1 text-base font-semibold text-slate-800">Nikhil Tagare</h1>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-100/70 transition"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-700"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden border-t border-slate-200/70"
              >
                <div className="px-4 py-2">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100/80"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
