import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FolderOpen } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
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
    <section className="section-padding surface-white">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="Selected Work"
            title="Ideas in Action"
            description="Explore the digital experiences, software, and intelligent systems we build."
          />
          <Button to="/work" variant="ghost" size="md" className="flex-shrink-0">
            View All Projects
            <ArrowRight size={18} />
          </Button>
        </div>

        {loading ? (
          <div className="text-center text-body py-16">Loading…</div>
        ) : projects.length === 0 ? (
          /* Empty state — designed, not blank */
          <div className="rounded-2xl bg-brand-light border border-border p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern-dark opacity-50" />
            <div className="relative max-w-md mx-auto">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm mx-auto mb-6">
                <FolderOpen size={28} className="text-brand/50" />
              </div>
              <h3 className="heading-3 mb-3">
                Our portfolio is growing.
              </h3>
              <p className="text-body leading-relaxed">
                We're building digital experiences and intelligent solutions. New projects and
                case studies will appear here soon.
              </p>
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
                  <p className="eyebrow mb-2">{project.category}</p>
                  <h3 className="text-lg font-semibold text-navy group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-body leading-relaxed">{project.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
