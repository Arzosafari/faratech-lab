import { useState, useEffect } from 'react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { getTeamMembers } from '../data/team.js'

const blocks = [
  {
    label: 'Who we are',
    title: 'A focused technology studio',
    text: 'FaraTech is a studio founded by two technologists who build software, AI, and digital products.',
  },
  {
    label: 'Our mission',
    title: 'Technology that serves a purpose',
    text: 'We help businesses turn ideas into useful digital products — chosen for clarity, built to last.',
  },
  {
    label: 'Our approach',
    title: 'Design before we build',
    text: 'We understand the problem first, design with intent, and build in close partnership with you.',
  },
]

const builds = [
  'Modern, responsive websites',
  'Custom software for real workflows',
  'AI-powered applications and assistants',
  'Automation that removes repetitive work',
]

export default function About() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    getTeamMembers().then(setMembers)
  }, [])

  return (
    <div>
      <PageHero
        label="About FaraTech"
        title="Ideas into digital solutions."
        intro="We bring software, design, and AI together to build things that actually work."
      />

      {/* Three short blocks across a hairline grid */}
      <section className="section">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {blocks.map((block, i) => (
              <Reveal key={block.label} delay={i * 0.06} className="bg-ink p-8 md:p-10">
                <p className="label mb-6">{block.label}</p>
                <h2 className="text-xl font-semibold tracking-tight text-mist">{block.title}</h2>
                <p className="body-text mt-4">{block.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we build — one line each */}
      <section className="section bg-ink-soft">
        <div className="container-content">
          <Reveal>
            <p className="label mb-6">What we build</p>
            <h2 className="display-sm max-w-xl">Solutions for real businesses</h2>
          </Reveal>

          <div className="mt-14 border-t border-line">
            {builds.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <div className="flex items-center gap-6 border-b border-line py-6">
                  <span className="label !text-mist-mute">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-lg font-medium text-mist md:text-xl">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section">
        <div className="container-content">
          <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="label mb-6">The founders</p>
              <h2 className="display-sm">The people behind the work</h2>
            </div>
            <Button to="/team" variant="ghost" size="sm" className="self-start md:self-auto">
              Meet the team
            </Button>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {members.map((member, i) => (
              <Reveal key={member.id} delay={i * 0.08}>
                <div className="hairline pt-8">
                  <h3 className="text-xl font-semibold text-mist">{member.name}</h3>
                  <p className="label mt-2">{member.role}</p>
                  <p className="body-text mt-4 max-w-md">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
