import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import ChapterLabel from '../components/ChapterLabel.jsx'
import Button from '../components/Button.jsx'
import { getPublishedProjects } from '../data/projects.js'

/**
 * Chapter 03 — Selected Work
 * Premium portfolio gallery from project data.
 * Designed empty state when no projects are published.
 */
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
    <section className="section-padding surface-ivory relative overflow-hidden">
      <div className="container-content relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Reveal>
              <ChapterLabel number="03" label="Selected Work" />
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-10 heading-2">Ideas in Action</h2>
            </Reveal>
          </div>
          {projects.length > 0 && (
            <Reveal delay={0.1}>
              <Button to="/work" variant="ghost" size="md" className="flex-shrink-0">
                View All Projects
                <ArrowRight size={16} />
              </Button>
            </Reveal>
          )}
        </div>

        <div className="mt-14">
          {loading ? (
            <div className="text-center text-steel py-16">Loading…</div>
          ) : projects.length === 0 ? (
            <EmptyState />
          ) : (
            <ProjectGallery projects={projects} />
          )}
        </div>
      </div>
    </section>
  )
}

function EmptyState() {
  return (
    <Reveal>
      <div className="relative">
        {/* Designed empty state — editorial, not blank */}
        <div className="border border-border-l rounded-lg p-12 md:p-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 grid-light opacity-30" />

          <div className="relative max-w-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-electric" />
              <span className="label">Coming Soon</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-midnight tracking-tight leading-tight">
              We're building what comes next.
            </h3>
            <p className="mt-4 body-lg">
              Our portfolio will grow as new digital experiences and intelligent
              solutions take shape. Each project will be documented as a
              complete case study — from the initial challenge through to the
              final result.
            </p>
            <div className="mt-8 pt-6 border-t border-border-l">
              <Button to="/contact" variant="outline" size="md">
                Start a Project
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function ProjectGallery({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {projects.map((project, index) => {
        // Alternate layout: first project spans wider
        const isWide = index === 0
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
              </div>
            </Link>
          </Reveal>
        )
      })}
    </div>
  )
}
