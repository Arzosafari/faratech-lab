import { useState, useEffect } from 'react'
import * as Icons from 'lucide-react'
import { ArrowRight, HelpCircle } from 'lucide-react'
import Button from '../components/Button.jsx'
import { getServices } from '../data/services.js'

export default function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    getServices().then(setServices)
  }, [])

  return (
    <div>
      {/* Page header — navy */}
      <section className="bg-navy-radial text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[100px]" />
        <div className="container-content relative py-20 md:py-28">
          <p className="eyebrow !text-brand-light mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            What We Build
          </h1>
          <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl">
            We offer a focused set of technology services designed to help businesses turn ideas
            into practical, working solutions.
          </p>
        </div>
      </section>

      {/* Service sections */}
      <section className="section-padding surface-cream">
        <div className="container-content">
          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = Icons[service.icon] || Icons.Sparkles
              const isDark = index % 2 === 0

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`rounded-2xl p-8 md:p-12 ${
                    isDark
                      ? 'bg-navy text-white relative overflow-hidden'
                      : 'bg-white border border-border'
                  }`}
                >
                  {isDark && <div className="absolute inset-0 grid-pattern opacity-20" />}
                  {isDark && (
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-[80px]" />
                  )}

                  <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Icon + title */}
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                            isDark ? 'bg-brand text-white' : 'bg-brand-light text-brand'
                          }`}
                        >
                          <Icon size={26} />
                        </div>
                        <span className={`text-sm font-semibold ${isDark ? 'text-brand-light' : 'text-slate-muted'}`}>
                          0{index + 1}
                        </span>
                      </div>
                      <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-navy'}`}>
                        {service.title}
                      </h2>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-8">
                      <p className={`text-lg leading-relaxed ${isDark ? 'text-white/80' : 'text-body'}`}>
                        {service.fullDescription}
                      </p>

                      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        <div>
                          <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-brand-light' : 'text-navy'}`}>
                            What it solves
                          </h3>
                          <ul className="space-y-2">
                            {service.highlights.map((h) => (
                              <li
                                key={h}
                                className={`text-sm leading-relaxed flex gap-2 ${isDark ? 'text-white/70' : 'text-body'}`}
                              >
                                <span className={`mt-1 ${isDark ? 'text-brand-light' : 'text-brand'}`}>•</span>
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-brand-light' : 'text-navy'}`}>
                            Example use cases
                          </h3>
                          <ul className="space-y-2">
                            {service.useCases.map((u) => (
                              <li
                                key={u}
                                className={`text-sm leading-relaxed flex gap-2 ${isDark ? 'text-white/70' : 'text-body'}`}
                              >
                                <span className={`mt-1 ${isDark ? 'text-brand-light' : 'text-brand'}`}>•</span>
                                {u}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-brand-light' : 'text-navy'}`}>
                          Deliverables
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.deliverables.map((d) => (
                            <span
                              key={d}
                              className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                                isDark
                                  ? 'bg-white/10 text-white/80'
                                  : 'bg-brand-light text-navy-rich'
                              }`}
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8">
                        <Button
                          to="/contact"
                          variant={isDark ? 'accent' : 'outline'}
                          size="sm"
                        >
                          Discuss This Service
                          <ArrowRight size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Not sure section */}
      <section className="bg-navy-radial text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-content relative py-20 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 mx-auto mb-6">
            <HelpCircle size={26} className="text-brand-light" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Not sure what you need yet?
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-xl mx-auto">
            Tell us about your idea. We'll help you explore the right technical direction.
          </p>
          <Button to="/contact" variant="accent" size="lg" className="mt-8">
            Discuss Your Project
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </div>
  )
}
