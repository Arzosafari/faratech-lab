import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { getServices } from '../data/services.js'

export default function WhatWeDo() {
  const [services, setServices] = useState([])

  useEffect(() => {
    getServices().then(setServices)
  }, [])

  if (services.length === 0) return null

  const [featured, ...rest] = services

  const FeaturedIcon = Icons[featured.icon] || Icons.Sparkles

  return (
    <section className="section-padding surface-cream">
      <div className="container-content">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">What We Do</p>
            <h2 className="heading-2">
              Technology Built Around Your Ideas
            </h2>
          </div>
          <p className="body-lg max-w-md">
            We combine thoughtful design, engineering, and intelligent technology to create
            digital solutions that solve real problems and support business growth.
          </p>
        </div>

        {/* Featured service — large card */}
        <Link
          to="/services"
          className="group block rounded-2xl bg-navy text-white p-8 md:p-10 mb-6 card-hover relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/15 rounded-full blur-[80px]" />
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                  <FeaturedIcon size={24} />
                </div>
                <span className="text-sm font-semibold text-brand-light tracking-wider">01 / Featured</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{featured.title}</h3>
              <p className="text-white/70 leading-relaxed max-w-lg">{featured.shortDescription}</p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <span className="inline-flex items-center gap-2 text-brand-light font-semibold group-hover:gap-3 transition-all">
                Learn More
                <ArrowUpRight size={20} />
              </span>
            </div>
          </div>
        </Link>

        {/* Supporting services — 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((service, index) => {
            const Icon = Icons[service.icon] || Icons.Sparkles
            return (
              <Link
                key={service.id}
                to="/services"
                className="group rounded-2xl bg-white border border-border p-7 card-hover"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand">
                    <Icon size={20} />
                  </div>
                  <span className="text-sm font-semibold text-slate-muted/60">
                    0{index + 2}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{service.title}</h3>
                <p className="text-sm text-body leading-relaxed">{service.shortDescription}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <ArrowUpRight size={16} />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
