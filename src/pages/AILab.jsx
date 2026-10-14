import { useState, useEffect } from 'react'
import { FlaskConical, ArrowRight, Sparkles } from 'lucide-react'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { getAiLabDemos } from '../data/aiLab.js'

const statusStyles = {
  available: 'bg-green-100 text-green-700',
  'in-development': 'bg-amber-100 text-amber-700',
  'coming-soon': 'bg-electric/10 text-electric',
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
      {/* Experimental header — dark with technical feel */}
      <section className="bg-midnight-radial text-white relative overflow-hidden min-h-[50vh] flex items-end">
        <div className="absolute inset-0 grid-dark opacity-30" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-electric/3 rounded-full blur-[80px]" />
        <div className="container-content relative pt-28 pb-16 md:pb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5">
              <FlaskConical size={18} className="text-electric" />
            </div>
            <span className="label-light">AI Lab</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tightest leading-[1.05] max-w-2xl">
            Exploring What's Possible with AI.
          </h1>
          <p className="mt-5 text-lg text-white/55 leading-relaxed max-w-2xl">
            At FaraTech, we explore how artificial intelligence can become
            useful, accessible, and practical through real applications and
            intelligent workflows.
          </p>
        </div>
      </section>

      {/* Demos */}
      <section className="section-padding surface-ivory">
        <div className="container-content">
          {loading ? (
            <div className="text-center text-steel py-16">Loading…</div>
          ) : demos.length === 0 ? (
            /* Coming-soon state — designed, not blank */
            <Reveal>
              <div className="max-w-2xl mx-auto">
                <div className="border border-border-l rounded-lg p-12 md:p-16 bg-white relative overflow-hidden">
                  <div className="absolute inset-0 grid-light opacity-30" />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-md bg-electric/10 mx-auto mb-6">
                      <Sparkles size={24} className="text-electric/60" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-midnight tracking-tight text-center">
                      The Lab Is Taking Shape
                    </h2>
                    <p className="mt-3 body-lg text-center">
                      We're setting up a space for AI experiments and
                      demonstrations. When demos are ready, they'll appear here —
                      each one a genuine, working tool, not a simulation.
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="label mb-4">What We're Exploring</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {demoTypes.map((type) => (
                      <div
                        key={type}
                        className="flex items-center gap-3 p-4 rounded-md bg-white border border-border-l"
                      >
                        <span className="flex h-1.5 w-1.5 rounded-full bg-electric flex-shrink-0" />
                        <span className="text-sm text-steel-dark font-medium">
                          {type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  className="rounded-lg border border-border-l bg-white p-6 transition-all duration-300 hover:border-electric/30 hover:shadow-lg"
                >
                  <div className="aspect-video rounded-md bg-electric/5 mb-5 overflow-hidden">
                    {demo.previewMedia ? (
                      <img
                        src={demo.previewMedia}
                        alt={demo.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Sparkles size={20} className="text-electric/20" />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <span className="label">{demo.category}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${statusStyles[demo.status]}`}
                    >
                      {statusLabels[demo.status]}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-midnight">
                    {demo.name}
                  </h3>
                  <p className="mt-2 body-sm">{demo.description}</p>

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
      <section className="bg-midnight-radial text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-dark opacity-20" />
        <div className="container-content relative py-20">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
              Interested in an AI solution?
            </h2>
            <p className="mt-3 text-white/55">
              Let's discuss how AI can solve a real problem for your business.
            </p>
            <Button to="/contact" variant="electric" className="mt-8">
              Start a Conversation
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
