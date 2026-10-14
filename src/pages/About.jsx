import { ArrowRight } from 'lucide-react'
import Button from '../components/Button.jsx'
import { getTeamMembers } from '../data/team.js'
import { useState, useEffect } from 'react'

export default function About() {
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
          <p className="eyebrow !text-brand-light mb-4">About FaraTech</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl">
            Ideas into Digital Solutions.
          </h1>
          <div className="mt-6 space-y-4 text-lg text-white/70 leading-relaxed max-w-3xl">
            <p>
              At FaraTech, we believe technology is most valuable when it solves real problems. We
              bring software development, thoughtful design, and artificial intelligence together
              to transform ideas into practical digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are + Mission — two-column editorial */}
      <section className="section-padding surface-cream">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="eyebrow mb-4">Who We Are</p>
              <h2 className="heading-3 mb-4">A focused technology studio</h2>
              <p className="body-lg">
                FaraTech is a technology studio founded by two professionals with a shared interest
                in software engineering, artificial intelligence, and creating useful digital
                experiences. We work closely with businesses to understand their challenges and
                build solutions that make a real difference.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-4">Our Mission</p>
              <h2 className="heading-3 mb-4">Technology that serves a purpose</h2>
              <p className="body-lg">
                To help businesses turn ideas into useful digital experiences, work more
                efficiently, and grow through technology. We choose appropriate tools over
                unnecessary complexity, and we build solutions that are maintainable, accessible,
                and designed to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach — soft blue band */}
      <section className="section-padding surface-soft-blue">
        <div className="container-content max-w-3xl">
          <p className="eyebrow mb-4">Our Approach</p>
          <h2 className="heading-3 mb-4">Design before we build</h2>
          <p className="body-lg">
            We start by understanding the problem. We design before we build. We choose the right
            tools for the job. And we work collaboratively with our clients from the first
            conversation through delivery and beyond.
          </p>
        </div>
      </section>

      {/* What We Build — navy band */}
      <section className="section-padding surface-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-content relative max-w-3xl">
          <p className="eyebrow !text-brand-light mb-4">What We Build</p>
          <h2 className="heading-3 !text-white mb-8">Solutions for real businesses</h2>
          <ul className="space-y-4 text-lg text-white/80">
            <li className="flex gap-3 items-start">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-brand mt-0.5">
                <span className="text-xs text-white">01</span>
              </span>
              Modern, responsive websites with thoughtful design
            </li>
            <li className="flex gap-3 items-start">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-brand mt-0.5">
                <span className="text-xs text-white">02</span>
              </span>
              Custom software tailored to business workflows
            </li>
            <li className="flex gap-3 items-start">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-brand mt-0.5">
                <span className="text-xs text-white">03</span>
              </span>
              AI-powered applications and intelligent assistants
            </li>
            <li className="flex gap-3 items-start">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-brand mt-0.5">
                <span className="text-xs text-white">04</span>
              </span>
              Automated workflows that reduce repetitive work
            </li>
          </ul>
        </div>
      </section>

      {/* Meet Our Founders */}
      <section className="section-padding surface-cream">
        <div className="container-content">
          <p className="eyebrow mb-4">Meet Our Founders</p>
          <h2 className="heading-2 mb-4">The people behind the work</h2>
          <p className="body-lg max-w-2xl mb-12">
            FaraTech is built by two technology professionals who share an interest in software
            engineering, artificial intelligence, and creating useful digital experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {members.map((member) => (
              <div key={member.id} className="rounded-2xl bg-white border border-border p-7">
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
              </div>
            ))}
          </div>

          <Button to="/team" variant="ghost" className="mt-8">
            Meet the Full Team
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-radial text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-content relative py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Let's build something meaningful.</h2>
          <p className="mt-3 text-white/70">Tell us about your idea and let's start a conversation.</p>
          <Button to="/contact" variant="accent" className="mt-8">
            Contact Our Team
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </div>
  )
}
