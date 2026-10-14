import Reveal from '../components/Reveal.jsx'
import ChapterLabel from '../components/ChapterLabel.jsx'

/**
 * Chapter 04 — How we think
 * Dark section, typographic composition with one graphic detail.
 * No icon cards — just strong typography and a single visual element.
 */
export default function Philosophy() {
  return (
    <section className="section-padding-lg surface-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-dark opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-electric/5 rounded-full blur-[120px]" />

      <div className="container-content relative">
        <Reveal>
          <ChapterLabel number="04" label="How We Think" light />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Large typographic statement */}
          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <h2 className="font-display text-2xl md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-[1.15]">
                Technology should do more
                <br />
                than work. It should{' '}
                <span className="text-electric">work for people.</span>
              </h2>
            </Reveal>
          </div>

          {/* Supporting text */}
          <div className="lg:col-span-4 lg:pt-3">
            <Reveal delay={0.12}>
              <p className="text-white/55 leading-relaxed">
                We focus on practical problem-solving, clear user experiences,
                thoughtful engineering, and the appropriate use of AI — not AI
                for its own sake.
              </p>
              <div className="mt-6 pt-6 border-t border-border-d">
                <p className="label-light">Principles</p>
                <ul className="mt-3 space-y-2">
                  <li className="text-sm text-white/50 flex gap-2">
                    <span className="text-electric">—</span>
                    Solve the real problem
                  </li>
                  <li className="text-sm text-white/50 flex gap-2">
                    <span className="text-electric">—</span>
                    Design before we build
                  </li>
                  <li className="text-sm text-white/50 flex gap-2">
                    <span className="text-electric">—</span>
                    Choose the right tools
                  </li>
                  <li className="text-sm text-white/50 flex gap-2">
                    <span className="text-electric">—</span>
                    Build to last
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Single graphic detail — a structured line diagram */}
        <Reveal delay={0.18}>
          <div className="mt-16 pt-10 border-t border-border-d">
            <div className="flex items-center gap-4 md:gap-8 overflow-x-auto pb-2">
              {[
                { label: 'Understand', desc: 'The real problem' },
                { label: 'Design', desc: 'The right solution' },
                { label: 'Build', desc: 'With care' },
                { label: 'Deliver', desc: 'And improve' },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-4 md:gap-8 flex-shrink-0">
                  <div>
                    <p className="label-light">{item.desc}</p>
                    <p className="mt-1 font-display text-sm font-semibold text-white">
                      {item.label}
                    </p>
                  </div>
                  {i < 3 && (
                    <svg width="32" height="2" className="flex-shrink-0" aria-hidden="true">
                      <line x1="0" y1="1" x2="32" y2="1" stroke="#293957" strokeWidth="1" />
                      <circle cx="32" cy="1" r="2" fill="#6E91FF" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
