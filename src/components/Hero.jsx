import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 md:px-8 lg:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          Future-ready technology partner
        </span>
        <h1 className="text-left text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
          Build intelligent, scalable and secure solutions
        </h1>
        <p className="max-w-2xl text-left text-neutral-300">
          From AI to cloud and enterprise software, we help teams ship faster with modern infrastructure and human-centered design.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <a href="#services" className="rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400">
            Explore our services
          </a>
          <a href="#contact" className="rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
            Talk to an expert
          </a>
        </div>
      </div>
    </section>
  )
}
