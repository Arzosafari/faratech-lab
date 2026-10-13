import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Button from '../components/Button.jsx'
import { getProjectBySlug, getPublishedProjects } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    Promise.all([getProjectBySlug(slug), getPublishedProjects()]).then(
      ([p, all]) => {
        setProject(p)
        setRelated(all.filter((item) => item.slug !== slug).slice(0, 2))
        setLoading(false)
      }
    )
  }, [slug])

  if (loading) {
    return (
      <div className="container-content py-24 text-center text-body">Loading…</div>
    )
  }

  if (!project) {
    return (
      <div className="container-content py-24 text-center">
        <h1 className="text-3xl font-bold text-navy mb-4">Project Not Found</h1>
        <p className="text-body mb-8">
          The project you're looking for doesn't exist or hasn't been published yet.
        </p>
        <Button to="/work" variant="outline">
          <ArrowLeft size={18} />
          Back to Work
        </Button>
      </div>
    )
  }

  return (
    <div>
      {/* Header — navy */}
      <section className="bg-navy-radial text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[100px]" />
        <div className="container-content relative py-16 md:py-20">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-brand-light transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Work
          </Link>
          <p className="eyebrow !text-brand-light mb-3">{project.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight max-w-3xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-3xl">
            {project.excerpt}
          </p>
          {project.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cover */}
      {project.coverImage && (
        <section className="surface-cream">
          <div className="container-content py-12">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full rounded-2xl object-cover max-h-[480px]"
            />
          </div>
        </section>
      )}

      {/* Case study content */}
      <section className="section-padding surface-white">
        <div className="container-content max-w-3xl">
          {project.description && (
            <p className="text-lg text-body leading-relaxed">{project.description}</p>
          )}

          {project.caseStudy?.problem && (
            <div className="mt-12">
              <h2 className="heading-3 mb-3">Problem & Context</h2>
              <p className="text-body leading-relaxed">{project.caseStudy.problem}</p>
            </div>
          )}
          {project.caseStudy?.goals && (
            <div className="mt-10">
              <h2 className="heading-3 mb-3">Goals</h2>
              <p className="text-body leading-relaxed">{project.caseStudy.goals}</p>
            </div>
          )}
          {project.caseStudy?.approach && (
            <div className="mt-10">
              <h2 className="heading-3 mb-3">Our Approach</h2>
              <p className="text-body leading-relaxed">{project.caseStudy.approach}</p>
            </div>
          )}
          {project.caseStudy?.implementation && (
            <div className="mt-10">
              <h2 className="heading-3 mb-3">Design & Implementation</h2>
              <p className="text-body leading-relaxed">{project.caseStudy.implementation}</p>
            </div>
          )}
          {project.caseStudy?.technologies && (
            <div className="mt-10">
              <h2 className="heading-3 mb-3">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-brand-light text-sm font-medium text-navy-rich"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          {project.caseStudy?.features && (
            <div className="mt-10">
              <h2 className="heading-3 mb-3">Key Features</h2>
              <ul className="space-y-2">
                {project.caseStudy.features.map((feature) => (
                  <li key={feature} className="text-body leading-relaxed flex gap-2">
                    <span className="text-brand mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.caseStudy?.outcomes && (
            <div className="mt-10">
              <h2 className="heading-3 mb-3">Outcomes</h2>
              <p className="text-body leading-relaxed">{project.caseStudy.outcomes}</p>
            </div>
          )}

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.gallery.map((media, i) => (
                <img
                  key={i}
                  src={media}
                  alt={`${project.title} — image ${i + 1}`}
                  className="w-full rounded-xl object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          )}

          {/* Project link */}
          {project.projectUrl && (
            <div className="mt-10">
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand hover:text-brand-hover font-medium"
              >
                <ExternalLink size={18} />
                View Live Project
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="section-padding surface-cream">
          <div className="container-content">
            <h2 className="heading-2 mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/work/${item.slug}`}
                  className="group rounded-2xl overflow-hidden bg-white border border-border card-hover"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-brand-light">
                    {item.coverImage ? (
                      <img
                        src={item.coverImage}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full" />
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-navy group-hover:text-brand transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-body">{item.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-navy-radial text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-content relative py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Have a project in mind?</h2>
          <p className="mt-3 text-white/70">Let's explore how we can build it together.</p>
          <Button to="/contact" variant="accent" className="mt-8">
            Start a Project
          </Button>
        </div>
      </section>
    </div>
  )
}
