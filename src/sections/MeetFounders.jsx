import { useState, useEffect } from 'react'
import { Linkedin } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
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

export default function MeetFounders() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    getTeamMembers().then(setMembers)
  }, [])

  return (
    <section className="section-padding surface-white">
      <div className="container-content">
        <SectionHeading
          eyebrow="Meet the Founders"
          title="The People Behind FaraTech"
          description="FaraTech is built by two technology professionals who share an interest in software engineering, artificial intelligence, and creating useful digital experiences."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {members.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl bg-cream border border-border overflow-hidden card-hover"
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
                <h3 className="text-xl font-semibold text-navy">{member.name}</h3>
                <p className="text-sm text-brand font-medium mt-1">{member.role}</p>
                <p className="mt-3 text-body leading-relaxed text-sm">{member.bio}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {member.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded-full bg-brand-light text-xs font-medium text-navy-rich"
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
                    className="mt-5 inline-flex items-center gap-2 text-sm text-body hover:text-brand transition-colors"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/team" variant="ghost">
            Meet the Full Team
          </Button>
        </div>
      </div>
    </section>
  )
}
