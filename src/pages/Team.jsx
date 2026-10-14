import { useState, useEffect } from 'react'
import { Linkedin } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
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

export default function Team() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    getTeamMembers().then(setMembers)
  }, [])

  return (
    <div>
      <PageHero
        label="Our Team"
        title="The people behind FaraTech"
        intro="A small, focused team. Close collaboration, clear communication, work that serves its purpose."
      />

      <section className="section">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-14">
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
                  <h2 className="text-2xl font-semibold text-mist">{member.name}</h2>
                  <p className="label mt-2">{member.role}</p>
                  <p className="body-text mt-4 max-w-md">{member.bio}</p>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
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
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
