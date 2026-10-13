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
    <section className="section-padding bg-navy-light">
      <div className="container-content">
        <SectionHeading
          eyebrow="Selected Work"
          title="Ideas in Action"
          description="Explore the digital experiences, software, and intelligent systems we build."
        />

        {loading ? (
          <div className="mt-16 text-center text-body py-16">Loading…</div>
        ) : projects.length === 0 ? (
          /* Empty state */
          <div className="mt-16 flex flex-col items-center text-center max-w-md mx-auto py-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-border mb-6">
              <FolderOpen size={28} className="text-navy/40" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-2">
              Our portfolio is growing.
            </h3>
            <p className="text-body leading-relaxed">
              We're building digital experiences and intelligent solutions. New projects and case
              studies will appear here soon.
            </p>
          </div>
        ) : (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-semibold text-navy group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-body leading-relaxed">
                    {project.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Button to="/work" variant="outline">
            View All Projects
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}
