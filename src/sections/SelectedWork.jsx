import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { getPublishedProjects } from '../data/projects.js'

export default function SelectedWork() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPublishedProjects().then((data) => {
      setProjects(data)
      setLoading(false)
    })
  }, [])

  return (
    <section className="section bg-ink-soft">
      <div className="container-content">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="label mb-6">02 — Selected Work</p>
            <h2 className="display-sm">Ideas in action</h2>
          </div>
          <Button to="/work" variant="ghost" size="sm" className="self-start md:self-auto">
            View all projects
            <ArrowUpRight size={16} />
          </Button>
        </Reveal>

        {loading ? (
          <p className="body-text mt-16">Loading…</p>
        ) : projects.length === 0 ? (
          /* Designed empty state — quiet, not blank */
          <Reveal className="mt-16 border-t border-line pt-14">
            <p className="max-w-lg text-2xl font-semibold leading-snug tracking-tight text-mist md:text-3xl">
              Our portfolio is growing. New case studies will appear here soon.
            </p>
            <Button to="/contact" variant="outline" size="md" className="mt-8">
              Start a Project
              <ArrowUpRight size={16} />
            </Button>
          </Reveal>
        ) : (
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.06}>
                <Link to={`/work/${project.slug}`} className="group block">
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-ink-card">
                    {project.coverImage && (
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <p className="label mb-2">{project.category}</p>
                      <h3 className="text-xl font-semibold text-mist transition-colors group-hover:text-ember">
                        {project.title}
                      </h3>
                      <p className="body-text mt-2 max-w-md">{project.excerpt}</p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="mt-1 flex-shrink-0 text-mist-mute transition-colors group-hover:text-mist"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
