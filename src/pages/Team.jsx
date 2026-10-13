import { useState, useEffect } from 'react'
import { Linkedin, ArrowRight } from 'lucide-react'
import Button from '../components/Button.jsx'
import { getTeamMembers } from '../data/team.js'

function PortraitPlaceholder({ name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <div className="aspect-[4/5] w-full rounded-xl bg-navy-light border border-border flex items-center justify-center">
      <span className="text-5xl font-semibold text-navy/25">{initials}</span>
    </div>
  )
}

export default function Team() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    getTeamMembers().then(setMembers)
  }, [])

  return (
    <div>
      {/* Page header */}
      <section className="bg-white border-b border-border">
        <div className="container-content py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">Our Team</h1>
          <p className="mt-4 text-lg text-body leading-relaxed max-w-2xl">
            FaraTech is a small, focused team. We believe in close collaboration, clear
            communication, and building technology that genuinely serves its purpose.
          </p>
        </div>
      </section>

      {/* Team members */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {members.map((member) => (
              <div key={member.id} className="flex flex-col">
                {member.portrait ? (
                  <img
                    src={member.portrait}
                    alt={member.name}
                    className="aspect-[4/5] w-full rounded-xl object-cover"
                    loading="lazy"
                  />
                ) : (
                  <PortraitPlaceholder name={member.name} />
                )}

                <div className="mt-6">
                  <h2 className="text-2xl font-semibold text-navy">{member.name}</h2>
                  <p className="text-accent font-medium mt-1">{member.role}</p>
                  <p className="mt-4 text-body leading-relaxed">{member.bio}</p>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-3">
                      Areas of Focus
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1 rounded-full bg-navy-light text-sm font-medium text-navy-secondary"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm text-body hover:text-accent transition-colors"
                    >
                      <Linkedin size={18} />
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* How we collaborate */}
          <div className="mt-20 pt-12 border-t border-border">
            <h2 className="text-2xl font-bold text-navy mb-4">How We Collaborate</h2>
            <p className="text-body leading-relaxed text-lg max-w-3xl">
              We work closely with our clients from the first conversation through delivery. We
              share progress openly, ask questions early, and make sure the solution we build fits
              the way your business actually works. Whether you have a clear specification or just a
              rough idea, we'll help you find the right path forward.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="container-content py-16 text-center">
          <h2 className="text-2xl font-bold">Want to work together?</h2>
          <p className="mt-2 text-white/70">We'd love to hear about your project.</p>
          <Button to="/contact" variant="accent" className="mt-6">
            Get in Touch
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </div>
  )
}
