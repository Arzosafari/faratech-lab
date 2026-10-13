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
      {/* Page header */}
      <section className="bg-white border-b border-border">
        <div className="container-content py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Ideas into Digital Solutions.
          </h1>
          <div className="mt-6 space-y-4 text-lg text-body leading-relaxed max-w-3xl">
            <p>
              At FaraTech, we believe technology is most valuable when it solves real problems. We
              bring software development, thoughtful design, and artificial intelligence together to
              transform ideas into practical digital solutions.
            </p>
            <p>
              Our goal is to help businesses move from concept to implementation with solutions
              designed around their needs, users, and long-term goals.
            </p>
            <p>
              Whether it's a modern website, a custom software product, an AI-powered application, or
              an automated workflow, we approach each challenge with curiosity, collaboration, and
              purposeful engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-3xl">
          <h2 className="text-2xl font-bold text-navy mb-4">Who We Are</h2>
          <p className="text-body leading-relaxed text-lg">
            FaraTech is a technology studio founded by two professionals with a shared interest in
            software engineering, artificial intelligence, and creating useful digital experiences.
            We work closely with businesses to understand their challenges and build solutions that
            make a real difference.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-navy-light">
        <div className="container-content max-w-3xl">
          <h2 className="text-2xl font-bold text-navy mb-4">Our Mission</h2>
          <p className="text-body leading-relaxed text-lg">
            To help businesses turn ideas into useful digital experiences, work more efficiently,
            and grow through technology. We choose appropriate tools over unnecessary complexity,
            and we build solutions that are maintainable, accessible, and designed to last.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-3xl">
          <h2 className="text-2xl font-bold text-navy mb-4">Our Approach</h2>
          <p className="text-body leading-relaxed text-lg">
            We start by understanding the problem. We design before we build. We choose the right
            tools for the job. And we work collaboratively with our clients from the first
            conversation through delivery and beyond.
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section className="section-padding bg-navy-light">
        <div className="container-content max-w-3xl">
          <h2 className="text-2xl font-bold text-navy mb-4">What We Build</h2>
          <ul className="space-y-3 text-body text-lg">
            <li className="flex gap-3">
              <span className="text-accent mt-1">•</span>
              Modern, responsive websites with thoughtful design
            </li>
            <li className="flex gap-3">
              <span className="text-accent mt-1">•</span>
              Custom software tailored to business workflows
            </li>
            <li className="flex gap-3">
              <span className="text-accent mt-1">•</span>
              AI-powered applications and intelligent assistants
            </li>
            <li className="flex gap-3">
              <span className="text-accent mt-1">•</span>
              Automated workflows that reduce repetitive work
            </li>
          </ul>
        </div>
      </section>

      {/* Meet Our Founders */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <h2 className="text-2xl font-bold text-navy mb-4">Meet Our Founders</h2>
          <p className="text-body leading-relaxed max-w-2xl mb-12">
            FaraTech is built by two technology professionals who share an interest in software
            engineering, artificial intelligence, and creating useful digital experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {members.map((member) => (
              <div key={member.id}>
                <h3 className="text-xl font-semibold text-navy">{member.name}</h3>
                <p className="text-sm text-accent font-medium mt-1">{member.role}</p>
                <p className="mt-3 text-body leading-relaxed">{member.bio}</p>
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
      <section className="bg-navy text-white">
        <div className="container-content py-16 text-center">
          <h2 className="text-2xl font-bold">Let's build something meaningful.</h2>
          <p className="mt-2 text-white/70">Tell us about your idea and let's start a conversation.</p>
          <Button to="/contact" variant="accent" className="mt-6">
            Contact Our Team
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </div>
  )
}
