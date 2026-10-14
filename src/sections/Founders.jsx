import { useState, useEffect } from 'react'
import { Linkedin } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import ChapterLabel from '../components/ChapterLabel.jsx'
import Button from '../components/Button.jsx'
import { getTeamMembers } from '../data/team.js'

function PortraitPlaceholder({ name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <div className="aspect-[4/5] w-full rounded-lg bg-midnight flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grid-dark opacity-30" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 rounded-full blur-[60px]" />
      <span className="relative font-display text-4xl font-bold text-white/25">
        {initials}
      </span>
    </div>
  )
}

/**
 * Chapter 06 — The people behind FaraTech
 * Human-centered editorial layout with equal prominence.
 */
export default function Founders() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    getTeamMembers().then(setMembers)
  }, [])

  return (
    <section className="section-padding surface-ivory relative overflow-hidden">
      <div className="container-content relative">
        <Reveal>
          <ChapterLabel number="06" label="The People Behind FaraTech" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-10 heading-2 max-w-2xl">
            Two founders. One shared commitment to useful technology.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
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
                  <h3 className="font-display text-xl font-semibold text-midnight">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-electric">
                    {member.role}
                  </p>
                  <p className="mt-3 body-sm leading-relaxed">{member.bio}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {member.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="px-2.5 py-1 rounded text-xs font-medium text-steel-dark bg-electric/8"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm text-steel-dark hover:text-electric transition-colors"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12">
            <Button to="/team" variant="ghost" size="md">
              Meet the Full Team
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
