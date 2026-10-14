import { useState, useEffect } from 'react'
import { Linkedin } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { getTeamMembers } from '../data/team.js'

function PortraitPlaceholder({ name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-2xl border border-line bg-ink-card">
      <div className="hero-orb absolute -bottom-1/3 h-2/3 w-2/3 rounded-full opacity-40" />
      <span className="relative text-6xl font-extrabold tracking-tight text-white/15">
        {initials}
      </span>
    </div>
  )
}

export default function MeetFounders() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    getTeamMembers().then(setMembers)
  }, [])

  return (
    <section className="section">
      <div className="container-content">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="label mb-6">05 — The Founders</p>
            <h2 className="display-sm">The people behind FaraTech</h2>
          </div>
          <Button to="/team" variant="ghost" size="sm" className="self-start md:self-auto">
            Meet the team
          </Button>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {members.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.08}>
              {member.portrait ? (
                <img
                  src={member.portrait}
                  alt={member.name}
                  className="aspect-[4/5] w-full rounded-2xl border border-line object-cover"
                  loading="lazy"
                />
              ) : (
                <PortraitPlaceholder name={member.name} />
              )}

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-mist">{member.name}</h3>
                <p className="label mt-2">{member.role}</p>
                <p className="body-text mt-4 max-w-md">{member.bio}</p>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {member.focusAreas.map((area) => (
                    <span key={area} className="label !text-mist-dim">
                      {area}
                    </span>
                  ))}
                </div>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-mist-dim transition-colors hover:text-mist"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
