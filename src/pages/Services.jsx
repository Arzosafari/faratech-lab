import { useState, useEffect } from 'react'
import * as Icons from 'lucide-react'
import { ArrowRight, HelpCircle } from 'lucide-react'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { getServices } from '../data/services.js'

export default function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    getServices().then(setServices)
  }, [])

  return (
    <div>
      {/* Editorial header — dark */}
      <section className="bg-midnight-radial text-white relative overflow-hidden min-h-[50vh] flex items-end">
        <div className="absolute inset-0 grid-dark opacity-30" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric/5 rounded-full blur-[120px]" />
        <div className="container-content relative pt-28 pb-16 md:pb-20">
          <p className="label-light mb-5">Services</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tightest leading-[1.05]">
            What We Build
          </h1>
          <p className="mt-5 text-lg text-white/55 leading-relaxed max-w-2xl">
            We offer a focused set of technology services designed to help
            businesses turn ideas into practical, working solutions.
          </p>
        </div>
      </section>

      {/* Service sections — alternating light/dark */}
      <section className="surface-ivory">
        <div className="container-content">
          <div className="divide-y divide-border-l">
            {services.map((service, index) => {
              const Icon = Icons[service.icon] || Icons.Sparkles
              const isDark = index % 2 === 1

              return (
                <Reveal key={service.id}>
                  <div
                    id={service.id}
                    className={`py-16 md:py-20 ${
                      isDark ? '-mx-6 md:-mx-8 lg:-mx-12 px-6 md:px-8 lg:px-12 bg-midnight' : ''
                    } relative overflow-hidden`}
                  >
                    {isDark && <div className="absolute inset-0 grid-dark opacity-20" />}
                    {isDark && (
                      <div className="absolute top-0 right-0 w-64 h-64 bg-electric/5 rounded-full blur-[80px]" />
                    )}

                    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                      {/* Number + icon + title */}
                      <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-5">
                          <div
                            className={`flex h-11 w-11 items-center justify-center rounded-md ${
                              isDark
                                ? 'bg-electric/15 text-electric'
                                : 'bg-electric/10 text-electric'
                            }`}
                          >
                            <Icon size={20} />
                          </div>
                          <span
                            className={`font-display text-sm font-semibold ${
                              isDark ? 'text-electric' : 'text-steel'
                            }`}
                          >
                            0{index + 1}
                          </span>
                        </div>
                        <h2
                          className={`font-display text-2xl md:text-3xl font-bold tracking-tight ${
                            isDark ? 'text-white' : 'text-midnight'
                          }`}
                        >
                          {service.title}
                        </h2>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-8">
                        <p
                          className={`text-lg leading-relaxed ${
                            isDark ? 'text-white/60' : 'body-lg'
                          }`}
                        >
                          {service.fullDescription}
                        </p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                          <div>
                            <h3
                              className={`label mb-3 ${
                                isDark ? '!text-steel-light' : ''
                              }`}
                            >
                              What it solves
                            </h3>
                            <ul className="space-y-2">
                              {service.highlights.map((h) => (
                                <li
                                  key={h}
                                  className={`text-sm leading-relaxed flex gap-2 ${
                                    isDark ? 'text-white/50' : 'body-sm'
                                  }`}
                                >
                                  <span
                                    className={`mt-1 ${
                                      isDark ? 'text-electric' : 'text-electric'
                                    }`}
                                  >
                                    ·
                                  </span>
                                  {h}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3
                              className={`label mb-3 ${
                                isDark ? '!text-steel-light' : ''
                              }`}
                            >
                              Example use cases
                            </h3>
                            <ul className="space-y-2">
                              {service.useCases.map((u) => (
                                <li
                                  key={u}
                                  className={`text-sm leading-relaxed flex gap-2 ${
                                    isDark ? 'text-white/50' : 'body-sm'
                                  }`}
                                >
                                  <span
                                    className={`mt-1 ${
                                      isDark ? 'text-electric' : 'text-electric'
                                    }`}
                                  >
                                    ·
                                  </span>
                                  {u}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h3
                            className={`label mb-3 ${
                              isDark ? '!text-steel-light' : ''
                            }`}
                          >
                            Deliverables
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {service.deliverables.map((d) => (
                              <span
                                key={d}
                                className={`px-3 py-1.5 rounded text-sm font-medium ${
                                  isDark
                                    ? 'bg-white/5 text-white/60 border border-border-d'
                                    : 'text-steel-dark bg-electric/8'
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
                            variant={isDark ? 'electric' : 'outline'}
                            size="sm"
                          >
                            Discuss This Service
                            <ArrowRight size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Not sure section */}
      <section className="bg-midnight-radial text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-dark opacity-20" />
        <div className="container-content relative py-20">
          <div className="max-w-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/5 mb-6">
              <HelpCircle size={22} className="text-electric" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
              Not sure what you need yet?
            </h2>
            <p className="mt-4 text-lg text-white/55 leading-relaxed">
              Tell us about your idea. We'll help you explore the right technical
              direction.
            </p>
            <Button to="/contact" variant="electric" size="lg" className="mt-8">
              Discuss Your Project
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
