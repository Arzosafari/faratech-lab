import { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { getServices } from '../data/services.js'

export default function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    getServices().then(setServices)
  }, [])

  return (
    <div>
      <PageHero
        label="Services"
        title="What we build"
        intro="A focused set of services for turning ideas into working products."
      />

      <section className="section">
        <div className="container-content">
          {services.map((service, index) => (
            <Reveal key={service.id}>
              <div
                id={service.id}
                className="grid grid-cols-1 gap-8 border-t border-line py-14 md:py-16 lg:grid-cols-12 lg:gap-10"
              >
                {/* Title rail */}
                <div className="lg:col-span-4">
                  <span className="label">{String(index + 1).padStart(2, '0')}</span>
                  <h2 className="mt-6 text-2xl font-bold tracking-tight text-mist md:text-3xl">
                    {service.title}
                  </h2>
                </div>

                {/* Content — middle columns left empty for breathing room */}
                <div className="lg:col-span-6 lg:col-start-6">
                  <p className="lead">{service.fullDescription}</p>

                  <ul className="mt-8 space-y-3">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="body-text flex gap-3">
                        <span className="text-ember">—</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                    {service.deliverables.map((deliverable) => (
                      <span key={deliverable} className="label !text-mist-dim">
                        {deliverable}
                      </span>
                    ))}
                  </div>

                  <Button to="/contact" variant="ghost" size="sm" className="mt-9 px-0">
                    Discuss this service
                    <ArrowUpRight size={16} />
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
