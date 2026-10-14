import Reveal from '../components/Reveal.jsx'
import ChapterLabel from '../components/ChapterLabel.jsx'

/**
 * Chapter 01 — Introduction
 * Warm ivory, asymmetric composition.
 * Strong heading on one side, short explanation on the other.
 */
export default function Introduction() {
  return (
    <section className="section-padding surface-ivory relative overflow-hidden">
      <div className="absolute inset-0 grid-light opacity-40" />
      <div className="container-content relative">
        <Reveal>
          <ChapterLabel number="01" label="Introduction" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Heading — left, larger */}
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-midnight tracking-tight leading-[1.1]">
                Ideas into
                <br />
                Digital Solutions.
              </h2>
            </Reveal>
          </div>

          {/* Explanation — right, smaller */}
          <div className="lg:col-span-5 lg:pt-2">
            <Reveal delay={0.12}>
              <p className="body-lg">
                FaraTech is a digital technology studio where ideas become
                thoughtfully engineered products. We bring together software
                development, design, and artificial intelligence to build
                solutions that serve real business needs.
              </p>
              <div className="mt-6 pt-6 border-t border-border-l">
                <p className="label">
                  FaraTech — Digital Technology Studio
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
