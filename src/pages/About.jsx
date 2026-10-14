import { ArrowRight } from 'lucide-react'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { getTeamMembers } from '../data/team.js'
import { useState, useEffect } from 'react'

export default function About() {
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
          <p className="label-light mb-5">About FaraTech</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tightest leading-[1.05] max-w-3xl">
            Ideas into Digital Solutions.
          </h1>
          <p className="mt-6 text-lg text-white/55 leading-relaxed max-w-2xl">
            At FaraTech, we believe technology is most valuable when it solves
            real problems. We bring software development, thoughtful design, and
            artificial intelligence together to transform ideas into practical
            digital solutions.
          </p>
        </div>
      </section>

      {/* Who We Are + Mission — asymmetric editorial */}
      <section className="section-padding surface-ivory">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="label mb-4">Who We Are</p>
                <h2 className="heading-3 mb-4">A focused technology studio</h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <p className="body-lg">
                  FaraTech is a technology studio founded by two professionals
                  with a shared interest in software engineering, artificial
                  intelligence, and creating useful digital experiences. We work
                  closely with businesses to understand their challenges and
                  build solutions that make a real difference.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-border-l grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="label mb-4">Our Mission</p>
                <h2 className="heading-3 mb-4">Technology that serves a purpose</h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <p className="body-lg">
                  To help businesses turn ideas into useful digital experiences,
                  work more efficiently, and grow through technology. We choose
                  appropriate tools over unnecessary complexity, and we build
                  solutions that are maintainable, accessible, and designed to
                  last.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach — dark band */}
      <section className="section-padding surface-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dark opacity-20" />
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-electric/5 rounded-full blur-[100px]" />
        <div className="container-content relative max-w-prose">
          <Reveal>
            <p className="label-light mb-4">Our Approach</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">
              Design before we build.
            </h2>
            <p className="text-lg text-white/55 leading-relaxed">
              We start by understanding the problem. We design before we build.
              We choose the right tools for the job. And we work collaboratively
              with our clients from the first conversation through delivery and
              beyond.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What We Build — ivory band with numbered list */}
      <section className="section-padding surface-ivory">
        <div className="container-content">
          <Reveal>
            <p className="label mb-4">What We Build</p>
            <h2 className="heading-2 mb-12">Solutions for real businesses</h2>
          </Reveal>

          <div className="border-t border-border-l">
            {[
              'Modern, responsive websites with thoughtful design',
              'Custom software tailored to business workflows',
              'AI-powered applications and intelligent assistants',
              'Automated workflows that reduce repetitive work',
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex items-center gap-5 md:gap-7 py-5 border-b border-border-l">
                  <span className="font-display text-sm font-semibold text-electric w-6">
                    0{i + 1}
                  </span>
                  <p className="body-lg">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Founders */}
      <section className="section-padding surface-white">
        <div className="container-content">
          <Reveal>
            <p className="label mb-4">Meet Our Founders</p>
            <h2 className="heading-2 mb-4">The people behind the work</h2>
            <p className="body-lg max-w-2xl mb-12">
              FaraTech is built by two technology professionals who share an
              interest in software engineering, artificial intelligence, and
              creating useful digital experiences.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {members.map((member, i) => (
              <Reveal key={member.id} delay={i * 0.05}>
                <div className="rounded-lg border border-border-l p-6 bg-ivory">
                  <h3 className="font-display text-lg font-semibold text-midnight">
                    {member.name}
                  </h3>
                  <p className="text-sm text-electric font-medium mt-1">
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
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <Button to="/team" variant="ghost" className="mt-8">
              Meet the Full Team
              <ArrowRight size={18} />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-midnight-radial text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-dark opacity-20" />
        <div className="container-content relative py-20">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
              Let's build something meaningful.
            </h2>
            <p className="mt-3 text-white/55">
              Tell us about your idea and let's start a conversation.
            </p>
            <Button to="/contact" variant="electric" className="mt-8">
              Contact Our Team
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
