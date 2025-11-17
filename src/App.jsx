import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950">
      <Hero />
      <Services />

      <footer id="contact" className="border-t border-white/10 bg-neutral-950/80 py-12 text-neutral-400">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h4 className="text-white">Ready to build?</h4>
              <p className="text-sm">Tell us about your goals and we’ll get in touch.</p>
            </div>
            <a
              href="mailto:hello@example.com"
              className="rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
            >
              Contact us
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
