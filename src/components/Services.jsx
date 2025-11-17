import React, { useState } from 'react'
import { Brain, Cloud, Server, Code, CheckCircle2, ArrowRight } from 'lucide-react'

const services = [
  {
    key: 'ai',
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'Transform your business with our custom AI solutions. From consulting to implementation, we help you harness the power of artificial intelligence to drive innovation and efficiency.',
    icon: <Brain className="h-8 w-8 text-cyan-300" />,
    features: [
      'AI Consulting and Strategy',
      'Custom AI Solutions Development',
      'Enterprise AI Implementation',
      'Computer Vision & Image Processing',
      'Natural Language Processing',
      'Generative AI Applications',
    ],
    cta: 'Explore AI Solutions',
    imageUrl: '/images/ai-service.jpg',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    key: 'cloud',
    title: 'Cloud Infrastructure & Managed Services',
    description:
      'Streamline your business with our comprehensive cloud infrastructure solutions. We help you migrate, optimize, and secure your cloud environment for maximum efficiency.',
    icon: <Cloud className="h-8 w-8 text-cyan-300" />,
    features: [
      'Cloud Architecture & Deployment',
      'Infrastructure as Code',
      'Multi-Cloud Management',
      'Cloud Security Integration',
      '24/7 Monitoring & Management',
      'Disaster Recovery Solutions',
    ],
    cta: 'Discover Cloud Services',
    imageUrl: '/images/cloud-service.jpg',
    color: 'from-blue-600 to-purple-600',
  },
  {
    key: 'infrastructure',
    title: 'IT Infrastructure Solutions & Support',
    description:
      "Our expert team provides end-to-end IT infrastructure solutions to keep your business running smoothly. From network design to security implementation, we've got you covered.",
    icon: <Server className="h-8 w-8 text-cyan-300" />,
    features: [
      'Enterprise Infrastructure Services',
      'Network Design & Implementation',
      'Security Solutions & Compliance',
      'On-Premise Server Management',
      'Database Services & Optimization',
      '24/7 Technical Support',
    ],
    cta: 'Learn About IT Support',
    imageUrl: '/images/infrastructure-service.jpg',
    color: 'from-purple-600 to-pink-600',
  },
  {
    key: 'software',
    title: 'Software & Application Development',
    description:
      'Turn your ideas into reality with our custom software development services. We build scalable, secure, and innovative applications tailored to your business needs.',
    icon: <Code className="h-8 w-8 text-cyan-300" />,
    features: [
      'Enterprise Applications',
      'Software Reconstruction',
      'SaaS Development',
      'Mobile App Development',
      'Custom Software Products',
      'UI/UX Design & Implementation',
    ],
    cta: 'Build With Us',
    imageUrl: '/images/software-service.jpg',
    color: 'from-pink-600 to-rose-600',
  },
]

export default function Services() {
  const [active, setActive] = useState('ai')

  return (
    <section id="services" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-cyan-300/80">Our Services</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Solutions that accelerate your growth</h2>
            <p className="mt-3 max-w-2xl text-neutral-300">
              Explore our core capabilities across AI, cloud, infrastructure and software. Select a card to see what’s included.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s) => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${s.color} p-[1px] text-left transition-transform hover:scale-[1.01] focus:outline-none`}
            >
              <div className="rounded-2xl bg-neutral-950/90 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mb-4 text-neutral-300">{s.description}</p>
                <div className="mt-4 flex items-center gap-2 text-cyan-300">
                  <span className="text-sm font-semibold">{s.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Active details */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          {services
            .filter((s) => s.key === active)
            .map((s) => (
              <div key={s.key} className="grid grid-cols-1 items-stretch gap-0 md:grid-cols-2">
                <div className="p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{s.title}</h3>
                      <p className="text-sm text-neutral-300">What’s included</p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-neutral-200">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyan-300" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex gap-3">
                    <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400">
                      {s.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                      Learn more
                    </a>
                  </div>
                </div>

                <div className="relative min-h-[260px] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-30`} />
                  <img
                    src={s.imageUrl}
                    alt={s.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-luminosity"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
