import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FolderOpen, ArrowRight } from 'lucide-react'
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
      {/* Page header — navy */}
      <section className="bg-navy-radial text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[100px]" />
        <div className="container-content relative py-20 md:py-28">
          <p className="eyebrow !text-brand-light mb-4">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Ideas in Action
          </h1>
          <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl">
            Every project begins with a challenge. We bring design, software, and intelligent
            technology together to create a solution.
          </p>
        </div>
      </section>

      {/* Project gallery */}
      <section className="section-padding surface-cream">
        <div className="container-content">
          {loading ? (
            <div className="text-center text-body py-16">Loading…</div>
          ) : projects.length === 0 ? (
            <div className="rounded-2xl bg-white border border-border p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 grid-pattern-dark opacity-40" />
              <div className="relative max-w-md mx-auto">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-light shadow-sm mx-auto mb-6">
                  <FolderOpen size={28} className="text-brand/50" />
                </div>
                <h2 className="heading-3 mb-3">
                  Good work takes thoughtful building.
                </h2>
                <p className="text-body leading-relaxed">
                  We're preparing our project showcases. Check back to explore the digital
                  solutions and intelligent systems created by FaraTech.
                </p>
                <Button to="/contact" variant="primary" className="mt-8">
                  Start a Project
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/work/${project.slug}`}
                  className="group rounded-2xl overflow-hidden bg-white border border-border card-hover"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-brand-light">
                    {project.coverImage ? (
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FolderOpen size={32} className="text-brand/20" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="eyebrow">{project.category}</p>
                      {project.featured && (
                        <span className="text-xs font-medium text-navy-rich bg-brand-light px-2.5 py-0.5 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-navy group-hover:text-brand transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-body leading-relaxed">{project.excerpt}</p>
                    {project.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full bg-cream text-xs font-medium text-slate-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
