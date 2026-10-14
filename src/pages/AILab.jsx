import { useState, useEffect } from 'react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { getAiLabDemos } from '../data/aiLab.js'

const demoTypes = [
  'Interactive AI assistants',
  'Text and information processing',
  'Intelligent workflow demos',
  'AI-powered business tools',
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
      <PageHero
        label="AI Lab"
        title="Exploring what's possible with AI."
        intro="Experiments and tools that make artificial intelligence genuinely useful."
      />

      <section className="section">
        <div className="container-content">
          {loading ? (
            <p className="body-text">Loading…</p>
          ) : demos.length === 0 ? (
            <>
              <Reveal className="border-t border-line pt-14">
                <p className="max-w-lg text-2xl font-semibold leading-snug tracking-tight text-mist md:text-3xl">
                  The lab is taking shape. Real, working demos will appear here — never simulations.
                </p>
              </Reveal>

              <div className="mt-20">
                <p className="label mb-6">What we're exploring</p>
                <div className="border-t border-line">
                  {demoTypes.map((type, i) => (
                    <Reveal key={type} delay={i * 0.05}>
                      <div className="flex items-center gap-6 border-b border-line py-6">
                        <span className="label !text-mist-mute">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-lg font-medium text-mist md:text-xl">{type}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <Button to="/contact" variant="outline" size="md" className="mt-14">
                Discuss an AI project
              </Button>
            </>
          ) : (
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {demos.map((demo) => (
                <div key={demo.id}>
                  <div className="aspect-video overflow-hidden rounded-2xl border border-line bg-ink-card">
                    {demo.previewMedia && (
                      <img
                        src={demo.previewMedia}
                        alt={demo.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <p className="label mt-5">{demo.category}</p>
                  <h2 className="mt-2 text-xl font-semibold text-mist">{demo.name}</h2>
                  <p className="body-text mt-2">{demo.description}</p>
                  {demo.status === 'available' && (
                    <Button to={demo.detailPage || '#'} variant="ghost" size="sm" className="mt-4 px-0">
                      Explore
                    </Button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
