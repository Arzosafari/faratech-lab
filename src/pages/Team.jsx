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
    <div className="aspect-[4/5] w-full rounded-2xl bg-navy text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-brand/20 rounded-full blur-[60px]" />
      <span className="relative text-5xl font-bold text-white/30">{initials}</span>
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
      {/* Page header — navy */}
      <section className="bg-navy-radial text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[100px]" />
        <div className="container-content relative py-20 md:py-28">
          <p className="eyebrow !text-brand-light mb-4">Our Team</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            The People Behind FaraTech
          </h1>
          <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl">
            FaraTech is a small, focused team. We believe in close collaboration, clear
            communication, and building technology that genuinely serves its purpose.
          </p>
        </div>
      </section>

      {/* Team members */}
      <section className="section-padding surface-cream">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {members.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl bg-white border border-border overflow-hidden card-hover"
              >
                {member.portrait ? (
                  <img
                    src={member.portrait}
                    alt={member.name}
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <PortraitPlaceholder name={member.name} />
                )}

                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-navy">{member.name}</h2>
                  <p className="text-brand font-medium mt-1 text-sm">{member.role}</p>
                  <p className="mt-4 text-body leading-relaxed text-sm">{member.bio}</p>

                  <div className="mt-6">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-navy mb-3">
                      Areas of Focus
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1 rounded-full bg-brand-light text-sm font-medium text-navy-rich"
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
                      className="mt-6 inline-flex items-center gap-2 text-sm text-body hover:text-brand transition-colors"
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
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">How We Collaborate</p>
              <h2 className="heading-3 mb-4">Close partnership from start to finish</h2>
              <p className="body-lg">
                We work closely with our clients from the first conversation through delivery. We
                share progress openly, ask questions early, and make sure the solution we build
                fits the way your business actually works. Whether you have a clear specification
                or just a rough idea, we'll help you find the right path forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-radial text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-content relative py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Want to work together?</h2>
          <p className="mt-3 text-white/70">We'd love to hear about your project.</p>
          <Button to="/contact" variant="accent" className="mt-8">
            Get in Touch
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </div>
  )
}
