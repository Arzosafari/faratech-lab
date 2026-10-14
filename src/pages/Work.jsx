import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { getPublishedProjects } from '../data/projects.js'

export default function Work() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPublishedProjects().then((data) => {
      setProjects(data)
      setLoading(false)
    })
  }, [])

  return (
    <div>
      {/* Editorial header — dark */}
      <section className="bg-midnight-radial text-white relative overflow-hidden min-h-[50vh] flex items-end">
        <div className="absolute inset-0 grid-dark opacity-30" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric/5 rounded-full blur-[120px]" />
        <div className="container-content relative pt-28 pb-16 md:pb-20">
          <p className="label-light mb-5">Our Work</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tightest leading-[1.05]">
            Ideas in Action
          </h1>
          <p className="mt-5 text-lg text-white/55 leading-relaxed max-w-2xl">
            Every project begins with a challenge. We bring design, software,
            and intelligent technology together to create a solution.
          </p>
        </div>
      </section>

      {/* Project gallery */}
      <section className="section-padding surface-ivory">
        <div className="container-content">
          {loading ? (
            <div className="text-center text-steel py-16">Loading…</div>
          ) : projects.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {projects.map((project, index) => {
                const isWide = index === 0 || index === 3
                const colSpan = isWide ? 'md:col-span-7' : 'md:col-span-5'

                return (
                  <Reveal key={project.id} delay={index * 0.05} className={colSpan}>
                    <Link
                      to={`/work/${project.slug}`}
                      className="group block rounded-lg overflow-hidden bg-white border border-border-l transition-all duration-300 hover:border-electric/30 hover:shadow-lg"
                    >
                      <div
                        className={`overflow-hidden bg-electric/5 ${
                          isWide ? 'aspect-[16/9]' : 'aspect-[16/10]'
                        }`}
                      >
                        {project.coverImage ? (
                          <img
                            src={project.coverImage}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="label">No preview</span>
                          </div>
                        )}
                      </div>
                      <div className="p-5 md:p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="label">{project.category}</span>
                          {project.featured && (
                            <span className="text-[10px] font-semibold uppercase tracking-label text-electric">
                              Featured
                            </span>
                          )}
                        </div>
                        <h3 className="font-display text-lg font-semibold text-midnight group-hover:text-electric transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-1.5 body-sm">{project.excerpt}</p>
                        {project.tags.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded text-xs font-medium text-steel-dark bg-electric/8"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  </Reveal>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

function EmptyState() {
  return (
    <Reveal>
      <div className="border border-border-l rounded-lg p-12 md:p-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-light opacity-30" />
        <div className="relative max-w-lg">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-electric" />
            <span className="label">Coming Soon</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-midnight tracking-tight leading-tight">
            We're building what comes next.
          </h2>
          <p className="mt-4 body-lg">
            Our portfolio will grow as new digital experiences and intelligent
            solutions take shape. Each project will be documented as a complete
            case study — from the initial challenge through to the final result.
          </p>
          <div className="mt-8 pt-6 border-t border-border-l">
            <Button to="/contact" variant="outline" size="md">
              Start a Project
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
