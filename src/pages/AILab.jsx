import { useState, useEffect } from 'react'
import { FlaskConical, ArrowRight, Sparkles } from 'lucide-react'
import Button from '../components/Button.jsx'
import { getAiLabDemos } from '../data/aiLab.js'

const statusStyles = {
  available: 'bg-green-100 text-green-700',
  'in-development': 'bg-amber-100 text-amber-700',
  'coming-soon': 'bg-navy-light text-navy-secondary',
}

const statusLabels = {
  available: 'Available',
  'in-development': 'In Development',
  'coming-soon': 'Coming Soon',
}

const demoTypes = [
  'Interactive AI assistants',
  'Text and information processing',
  'Intelligent workflow demonstrations',
  'AI-powered business tools',
  'Machine learning demos',
  'Experimental interfaces',
]

export default function AILab() {
  const [demos, setDemos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAiLabDemos().then((data) => {
      setDemos(data)
      setLoading(false)
    })
  }, [])

  return (
    <div>
      {/* Page header */}
      <section className="bg-white border-b border-border">
        <div className="container-content py-16 md:py-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-light">
              <FlaskConical size={20} className="text-navy" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              AI Lab
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Exploring What's Possible with AI.
          </h1>
          <p className="mt-4 text-lg text-body leading-relaxed max-w-2xl">
            At FaraTech, we explore how artificial intelligence can become useful, accessible, and
            practical through real applications and intelligent workflows.
          </p>
        </div>
      </section>

      {/* Demos */}
      <section className="section-padding bg-white">
        <div className="container-content">
          {loading ? (
            <div className="text-center text-body py-16">Loading…</div>
          ) : demos.length === 0 ? (
            /* Empty / coming-soon state */
            <div className="max-w-2xl mx-auto text-center py-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-light mx-auto mb-6">
                <Sparkles size={28} className="text-navy/40" />
              </div>
              <h2 className="text-2xl font-semibold text-navy mb-3">
                The Lab Is Taking Shape
              </h2>
              <p className="text-body leading-relaxed">
                We're setting up a space for AI experiments and demonstrations. When demos are ready,
                they'll appear here — each one a genuine, working tool, not a simulation.
              </p>

              <div className="mt-12 text-left">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-4">
                  What We're Exploring
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {demoTypes.map((type) => (
                    <div
                      key={type}
                      className="flex items-center gap-3 p-4 rounded-lg bg-navy-light"
                    >
                      <span className="flex h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-sm text-navy-secondary font-medium">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  className="rounded-xl border border-border bg-white p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="aspect-video rounded-lg bg-navy-light mb-5 overflow-hidden">
                    {demo.previewMedia ? (
                      <img
                        src={demo.previewMedia}
                        alt={demo.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Sparkles size={24} className="text-navy/20" />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {demo.category}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[demo.status]}`}
                    >
                      {statusLabels[demo.status]}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-navy">{demo.name}</h3>
                  <p className="mt-2 text-sm text-body leading-relaxed">
                    {demo.description}
                  </p>

                  {demo.status === 'available' && (
                    <Button to={demo.detailPage || '#'} size="sm" className="mt-4">
                      Explore
                      <ArrowRight size={16} />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="container-content py-16 text-center">
          <h2 className="text-2xl font-bold">Interested in an AI solution?</h2>
          <p className="mt-2 text-white/70">
            Let's discuss how AI can solve a real problem for your business.
          </p>
          <Button to="/contact" variant="accent" className="mt-6">
            Start a Conversation
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </div>
  )
}
