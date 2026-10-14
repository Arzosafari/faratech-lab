import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { getProjectBySlug, getPublishedProjects } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    Promise.all([getProjectBySlug(slug), getPublishedProjects()]).then(([p, all]) => {
      setProject(p)
      setRelated(all.filter((item) => item.slug !== slug).slice(0, 2))
      setLoading(false)
    })
  }, [slug])

  if (loading) {
    return <div className="container-content py-32 body-text">Loading…</div>
  }

  if (!project) {
    return (
      <section className="relative overflow-hidden bg-ink-radial">
        <div className="pointer-events-none absolute -top-44 right-[-12%] h-[440px] w-[440px] rounded-full bg-flare blur-[150px]" />
        <div className="container-content relative flex min-h-[70vh] flex-col justify-center py-32">
          <p className="label">Not found</p>
          <h1 className="display-sm mt-8 max-w-2xl">This project doesn't exist.</h1>
          <p className="lead mt-6 max-w-md">
            It may have been unpublished, or the link is no longer valid.
          </p>
          <Button to="/work" variant="outline" size="md" className="mt-10 w-fit">
            <ArrowLeft size={16} />
            Back to Work
          </Button>
        </div>
      </section>
    )
  }

  const sections = [
    { key: 'problem', label: 'Problem & Context' },
    { key: 'goals', label: 'Goals' },
    { key: 'approach', label: 'Our Approach' },
    { key: 'implementation', label: 'Design & Implementation' },
    { key: 'outcomes', label: 'Outcomes' },
  ].filter((s) => project.caseStudy?.[s.key])

  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-line bg-ink-radial">
        <div className="pointer-events-none absolute -top-44 right-[-12%] h-[440px] w-[440px] rounded-full bg-flare blur-[150px]" />
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="container-content relative pb-16 pt-36 md:pb-24 md:pt-44">
          <Link
            to="/work"
            className="label inline-flex items-center gap-2 !text-mist-dim transition-colors hover:!text-mist"
          >
            <ArrowLeft size={14} />
            Back to Work
          </Link>
          <p className="label mt-10">{project.category}</p>
          <h1 className="display-sm mt-8 max-w-3xl">{project.title}</h1>
          <p className="lead mt-6 max-w-xl">{project.excerpt}</p>
          {project.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {project.tags.map((tag) => (
                <span key={tag} className="label !text-mist-dim">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cover */}
      {project.coverImage && (
        <div className="container-content pt-14">
          <img
            src={project.coverImage}
            alt={project.title}
            className="max-h-[520px] w-full rounded-2xl border border-line object-cover"
          />
        </div>
      )}

      {/* Case study */}
      <section className="section">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6 lg:col-start-6">
              {project.description && <p className="lead">{project.description}</p>}

              {sections.map((section) => (
                <Reveal key={section.key} className="mt-12 border-t border-line pt-10">
                  <h2 className="label mb-4 !text-ember">{section.label}</h2>
                  <p className="body-text text-base">{project.caseStudy[section.key]}</p>
                </Reveal>
              ))}

              {project.caseStudy?.technologies && (
                <div className="mt-12 border-t border-line pt-10">
                  <h2 className="label mb-5 !text-ember">Technologies Used</h2>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {project.caseStudy.technologies.map((tech) => (
                      <span key={tech} className="label !text-mist-dim">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.caseStudy?.features && (
                <div className="mt-12 border-t border-line pt-10">
                  <h2 className="label mb-5 !text-ember">Key Features</h2>
                  <ul className="space-y-3">
                    {project.caseStudy.features.map((feature) => (
                      <li key={feature} className="body-text flex gap-3">
                        <span className="text-ember">—</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-mist transition-colors hover:text-ember"
                >
                  <ExternalLink size={17} />
                  View Live Project
                </a>
              )}
            </div>
          </div>

          {project.gallery.length > 0 && (
            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {project.gallery.map((media, i) => (
                <img
                  key={i}
                  src={media}
                  alt={`${project.title} — image ${i + 1}`}
                  className="w-full rounded-2xl border border-line object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section bg-ink-soft">
          <div className="container-content">
            <p className="label mb-6">Related</p>
            <h2 className="display-sm mb-14">More work</h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {related.map((item) => (
                <Link key={item.id} to={`/work/${item.slug}`} className="group block">
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-ink-card">
                    {item.coverImage && (
                      <img
                        src={item.coverImage}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-mist transition-colors group-hover:text-ember">
                    {item.title}
                  </h3>
                  <p className="body-text mt-2">{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
