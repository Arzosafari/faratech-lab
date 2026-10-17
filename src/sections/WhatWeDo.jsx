import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { getServices } from '../data/services.js'

export default function WhatWeDo() {
  const [services, setServices] = useState([])

  useEffect(() => {
    getServices().then(setServices)
  }, [])

  if (services.length === 0) return null

  return (
    <section className="section">
      <div className="container-content">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="label mb-6">01 — Capabilities</p>
            <h2 className="display-sm">What we build</h2>
          </div>
          <p className="body-text max-w-xs">
            Four focused services, built to solve real problems.
          </p>
        </Reveal>

        {/* Service matrix — numbered rows, content kept to one line */}
        <div className="mt-16 border-t border-line">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05}>
              <Link
                to="/services"
                className="group grid grid-cols-12 items-center gap-4 border-b border-line py-7 transition-colors duration-300 hover:bg-white/[0.02] md:py-9"
              >
                <span className="label col-span-2 !text-mist-mute md:col-span-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="col-span-10 text-2xl font-bold tracking-tight text-mist transition-colors duration-300 group-hover:text-ember md:col-span-5 md:text-4xl">
                  {service.title}
                </h3>
                <p className="col-span-10 col-start-3 body-text md:col-span-5 md:col-start-auto">
                  {service.shortDescription}
                </p>
                <span className="col-span-12 flex justify-end text-mist-mute transition-colors duration-300 group-hover:text-mist md:col-span-1">
                  <ArrowUpRight size={20} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
