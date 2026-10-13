import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import { getServices } from '../data/services.js'

export default function WhatWeDo() {
  const [services, setServices] = useState([])

  useEffect(() => {
    getServices().then(setServices)
  }, [])

  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <SectionHeading
          eyebrow="What We Do"
          title="Technology Built Around Your Ideas"
          description="We combine thoughtful design, engineering, and intelligent technology to create digital solutions that solve real problems and support business growth."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {services.map((service, index) => {
            const Icon = Icons[service.icon] || Icons.Sparkles
            return (
              <Link
                key={service.id}
                to="/services"
                className="group flex gap-5 p-6 -m-6 rounded-xl hover:bg-navy-light transition-colors duration-200"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white">
                    <Icon size={22} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-navy">
                      {service.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="text-body opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-200"
                    />
                  </div>
                  <p className="mt-2 text-body leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
                <span className="sr-only">{index + 1}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
