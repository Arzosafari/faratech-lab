import { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import ChapterLabel from '../components/ChapterLabel.jsx'
import { getServices } from '../data/services.js'

/**
 * Chapter 02 — Capabilities
 * Editorial service index with hover-reveal detail panel.
 * Split layout: numbered list left, detail preview right.
 */
export default function Capabilities() {
  const [services, setServices] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    getServices().then((data) => {
      setServices(data)
    })
  }, [])

  if (services.length === 0) return null

  const activeService = services[active]
  const ActiveIcon = Icons[activeService.icon] || Icons.Sparkles

  return (
    <section className="section-padding surface-white relative overflow-hidden">
      <div className="container-content relative">
        <Reveal>
          <ChapterLabel number="02" label="Capabilities" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-10 heading-2 max-w-xl">
            What we build, and how we think about it.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12">
          {/* ── Service index — left ── */}
          <div className="lg:col-span-7">
            <div className="border-t border-border-l">
              {services.map((service, index) => {
                const Icon = Icons[service.icon] || Icons.Sparkles
                const isActive = active === index
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => setActive(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setActive(index)
                      }
                    }}
                    className="group border-b border-border-l py-5 md:py-6 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-5 md:gap-7">
                      <span
                        className={`font-display text-sm font-semibold w-6 transition-colors ${
                          isActive ? 'text-electric' : 'text-steel'
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <div className="flex-1">
                        <h3
                          className={`font-display text-lg md:text-xl font-semibold tracking-tight transition-colors ${
                            isActive ? 'text-midnight' : 'text-steel-dark'
                          }`}
                        >
                          {service.title}
                        </h3>
                        {/* Mobile: show description inline */}
                        <p className="mt-1.5 body-sm text-steel lg:hidden">
                          {service.shortDescription}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className={`transition-all duration-300 ${
                          isActive
                            ? 'text-electric opacity-100'
                            : 'text-steel opacity-0 group-hover:opacity-60'
                        }`}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── Detail panel — right (desktop only) ── */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-28">
              <div
                key={activeService.id}
                className="rounded-lg bg-ivory border border-border-l p-7 animate-fade-in"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-electric/10 text-electric mb-5">
                  <ActiveIcon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-midnight mb-3">
                  {activeService.title}
                </h3>
                <p className="body-sm leading-relaxed">
                  {activeService.shortDescription}
                </p>

                <div className="mt-6 pt-5 border-t border-border-l">
                  <p className="label mb-3">What it solves</p>
                  <ul className="space-y-1.5">
                    {activeService.highlights.map((h) => (
                      <li
                        key={h}
                        className="body-sm flex gap-2 text-steel-dark"
                      >
                        <span className="text-electric mt-1">·</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
