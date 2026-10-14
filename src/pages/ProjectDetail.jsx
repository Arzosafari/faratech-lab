import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
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
      <div className="container-content py-24 text-center text-steel">Loading…</div>
    )
  }

  if (!project) {
    return (
      <div className="container-content py-32 text-center">
        <h1 className="font-display text-3xl font-bold text-midnight mb-4">
          Project Not Found
        </h1>
        <p className="body-lg mb-8">
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
      {/* Header — dark */}
      <section className="bg-midnight-radial text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-dark opacity-30" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric/5 rounded-full blur-[120px]" />
        <div className="container-content relative pt-28 pb-16 md:pb-20">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-electric transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Work
          </Link>
          <p className="label-light mb-3">{project.category}</p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-3xl leading-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-white/55 leading-relaxed max-w-2xl">
            {project.excerpt}
          </p>
          {project.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded text-xs font-medium text-white/60 bg-white/5 border border-border-d"
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
        <section className="surface-ivory">
          <div className="container-content py-12">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full rounded-lg object-cover max-h-[480px]"
            />
          </div>
        </section>
      )}

      {/* Case study content */}
      <section className="section-padding surface-white">
        <div className="container-content max-w-prose">
          {project.description && (
            <Reveal>
              <p className="text-lg text-steel-dark leading-relaxed">
                {project.description}
              </p>
            </Reveal>
          )}

          {project.caseStudy?.problem && (
            <Reveal>
              <div className="mt-12 pt-8 border-t border-border-l">
                <p className="label mb-3">Problem & Context</p>
                <p className="body-text">{project.caseStudy.problem}</p>
              </div>
            </Reveal>
          )}
          {project.caseStudy?.goals && (
            <Reveal>
              <div className="mt-10">
                <p className="label mb-3">Goals</p>
                <p className="body-text">{project.caseStudy.goals}</p>
              </div>
            </Reveal>
          )}
          {project.caseStudy?.approach && (
            <Reveal>
              <div className="mt-10">
                <p className="label mb-3">Our Approach</p>
                <p className="body-text">{project.caseStudy.approach}</p>
              </div>
            </Reveal>
          )}
          {project.caseStudy?.implementation && (
            <Reveal>
              <div className="mt-10">
                <p className="label mb-3">Design & Implementation</p>
                <p className="body-text">{project.caseStudy.implementation}</p>
              </div>
            </Reveal>
          )}
          {project.caseStudy?.technologies && (
            <Reveal>
              <div className="mt-10">
                <p className="label mb-3">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {project.caseStudy.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-sm font-medium text-steel-dark bg-electric/8"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
          {project.caseStudy?.features && (
            <Reveal>
              <div className="mt-10">
                <p className="label mb-3">Key Features</p>
                <ul className="space-y-2">
                  {project.caseStudy.features.map((feature) => (
                    <li key={feature} className="body-text flex gap-2">
                      <span className="text-electric mt-1">·</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
          {project.caseStudy?.outcomes && (
            <Reveal>
              <div className="mt-10">
                <p className="label mb-3">Outcomes</p>
                <p className="body-text">{project.caseStudy.outcomes}</p>
              </div>
            </Reveal>
          )}

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.gallery.map((media, i) => (
                <img
                  key={i}
                  src={media}
                  alt={`${project.title} — image ${i + 1}`}
                  className="w-full rounded-lg object-cover"
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
                className="inline-flex items-center gap-2 text-electric hover:text-electric-hover font-medium transition-colors"
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
        <section className="section-padding surface-ivory">
          <div className="container-content">
            <p className="label mb-6">Related Projects</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/work/${item.slug}`}
                  className="group rounded-lg overflow-hidden bg-white border border-border-l transition-all duration-300 hover:border-electric/30 hover:shadow-lg"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-electric/5">
                    {item.coverImage ? (
                      <img
                        src={item.coverImage}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full" />
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-midnight group-hover:text-electric transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 body-sm">{item.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-midnight-radial text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-dark opacity-20" />
        <div className="container-content relative py-16 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
            Have a project in mind?
          </h2>
          <p className="mt-3 text-white/55">Let's explore how we can build it together.</p>
          <Button to="/contact" variant="electric" className="mt-8">
            Start a Project
          </Button>
        </div>
      </section>
    </div>
  )
}
