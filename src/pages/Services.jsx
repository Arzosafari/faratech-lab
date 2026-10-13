import { useState, useEffect } from 'react'
import * as Icons from 'lucide-react'
import { ArrowRight, HelpCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import { getServices } from '../data/services.js'

export default function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    getServices().then(setServices)
  }, [])

  return (
    <div>
      {/* Page header */}
      <section className="bg-white border-b border-border">
        <div className="container-content py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">Services</h1>
          <p className="mt-4 text-lg text-body leading-relaxed max-w-2xl">
            We offer a focused set of technology services designed to help businesses turn ideas into
            practical, working solutions.
          </p>
        </div>
      </section>

      {/* Service sections */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = Icons[service.icon] || Icons.Sparkles
              const isEven = index % 2 === 0

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Icon + title */}
                  <div className="lg:col-span-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-white mb-5">
                      <Icon size={26} />
                    </div>
                    <h2 className="text-2xl font-bold text-navy">{service.title}</h2>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8">
                    <p className="text-lg text-body leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-3">
                          What it solves
                        </h3>
                        <ul className="space-y-2">
                          {service.highlights.map((h) => (
                            <li key={h} className="text-body text-sm leading-relaxed flex gap-2">
                              <span className="text-accent mt-1">•</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-3">
                          Example use cases
                        </h3>
                        <ul className="space-y-2">
                          {service.useCases.map((u) => (
                            <li key={u} className="text-body text-sm leading-relaxed flex gap-2">
                              <span className="text-accent mt-1">•</span>
                              {u}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-3">
                        Deliverables
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((d) => (
                          <span
                            key={d}
                            className="px-3 py-1.5 rounded-lg bg-navy-light text-sm text-navy-secondary font-medium"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button to="/contact" variant="outline" size="sm">
                        Discuss This Service
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Not sure section */}
      <section className="bg-navy-light">
        <div className="container-content py-20 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white border border-border mx-auto mb-6">
            <HelpCircle size={26} className="text-navy" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Not sure what you need yet?
          </h2>
          <p className="mt-4 text-lg text-body leading-relaxed max-w-xl mx-auto">
            Tell us about your idea. We'll help you explore the right technical direction.
          </p>
          <Button to="/contact" size="lg" className="mt-8">
            Discuss Your Project
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </div>
  )
}
