import { useState, useEffect } from 'react'
import { Linkedin, ArrowRight } from 'lucide-react'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { getTeamMembers } from '../data/team.js'

function PortraitPlaceholder({ name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <div className="aspect-[4/5] w-full rounded-lg bg-midnight flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grid-dark opacity-30" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-electric/10 rounded-full blur-[60px]" />
      <span className="relative font-display text-5xl font-bold text-white/25">
        {initials}
      </span>
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
      {/* Editorial header — dark */}
      <section className="bg-midnight-radial text-white relative overflow-hidden min-h-[50vh] flex items-end">
        <div className="absolute inset-0 grid-dark opacity-30" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric/5 rounded-full blur-[120px]" />
        <div className="container-content relative pt-28 pb-16 md:pb-20">
          <p className="label-light mb-5">Our Team</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tightest leading-[1.05]">
            The People Behind FaraTech
          </h1>
          <p className="mt-5 text-lg text-white/55 leading-relaxed max-w-2xl">
            FaraTech is a small, focused team. We believe in close collaboration,
            clear communication, and building technology that genuinely serves
            its purpose.
          </p>
        </div>
      </section>

      {/* Team members — equal prominence */}
      <section className="section-padding surface-ivory">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {members.map((member, i) => (
              <Reveal key={member.id} delay={i * 0.08}>
                <div className="group">
                  {member.portrait ? (
                    <img
                      src={member.portrait}
                      alt={member.name}
                      className="aspect-[4/5] w-full rounded-lg object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <PortraitPlaceholder name={member.name} />
                  )}

                  <div className="mt-5">
                    <h2 className="font-display text-2xl font-semibold text-midnight">
                      {member.name}
                    </h2>
                    <p className="text-electric font-medium mt-1 text-sm">
                      {member.role}
                    </p>
                    <p className="mt-4 body-text text-sm leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="mt-6">
                      <p className="label mb-3">Areas of Focus</p>
                      <div className="flex flex-wrap gap-1.5">
                        {member.focusAreas.map((area) => (
                          <span
                            key={area}
                            className="px-2.5 py-1 rounded text-sm font-medium text-steel-dark bg-electric/8"
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
                        className="mt-6 inline-flex items-center gap-2 text-sm text-steel-dark hover:text-electric transition-colors"
                      >
                        <Linkedin size={18} />
                        Connect on LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* How we collaborate */}
          <div className="mt-20 pt-12 border-t border-border-l">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-5">
                <Reveal>
                  <p className="label mb-4">How We Collaborate</p>
                  <h2 className="heading-3">
                    Close partnership from start to finish
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-7">
                <Reveal delay={0.05}>
                  <p className="body-lg">
                    We work closely with our clients from the first conversation
                    through delivery. We share progress openly, ask questions
                    early, and make sure the solution we build fits the way your
                    business actually works. Whether you have a clear
                    specification or just a rough idea, we'll help you find the
                    right path forward.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-midnight-radial text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-dark opacity-20" />
        <div className="container-content relative py-20">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
              Want to work together?
            </h2>
            <p className="mt-3 text-white/55">We'd love to hear about your project.</p>
            <Button to="/contact" variant="electric" className="mt-8">
              Get in Touch
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
