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
      {/* Page header */}
      <section className="bg-white border-b border-border">
        <div className="container-content py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Our Work
          </h1>
          <p className="mt-4 text-lg text-body leading-relaxed max-w-2xl">
            Every project begins with a challenge. We bring design, software, and intelligent
            technology together to create a solution.
          </p>
        </div>
      </section>

      {/* Project gallery */}
      <section className="section-padding bg-navy-light">
        <div className="container-content">
          {loading ? (
            <div className="text-center text-body py-16">Loading…</div>
          ) : projects.length === 0 ? (
            <div className="flex flex-col items-center text-center max-w-md mx-auto py-16">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-border mb-6">
                <FolderOpen size={28} className="text-navy/40" />
              </div>
              <h2 className="text-2xl font-semibold text-navy mb-3">
                Good work takes thoughtful building.
              </h2>
              <p className="text-body leading-relaxed">
                We're preparing our project showcases. Check back to explore the digital solutions
                and intelligent systems created by FaraTech.
              </p>
              <Button to="/contact" variant="outline" className="mt-8">
                Start a Project
                <ArrowRight size={18} />
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/work/${project.slug}`}
                  className="group rounded-xl overflow-hidden bg-white border border-border hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-navy-light">
                    {project.coverImage ? (
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FolderOpen size={32} className="text-navy/20" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-medium uppercase tracking-wider text-accent">
                        {project.category}
                      </p>
                      {project.featured && (
                        <span className="text-xs font-medium text-navy-secondary bg-navy-light px-2 py-0.5 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-navy group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-body leading-relaxed">
                      {project.excerpt}
                    </p>
                    {project.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full bg-navy-light text-xs font-medium text-navy-secondary"
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
