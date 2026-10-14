import Reveal from '../components/Reveal.jsx'
import ChapterLabel from '../components/ChapterLabel.jsx'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We start by understanding your business, its challenges, your users, and what you need to achieve.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We develop the concept, the user experience, and the technical approach before writing production code.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We implement, test, and refine the solution with clean, maintainable code and regular check-ins.',
  },
  {
    number: '04',
    title: 'Deliver & Improve',
    description:
      'We launch, gather feedback, and support future improvements as your needs evolve.',
  },
]

/**
 * Chapter 05 — Our process
 * Horizontal timeline on desktop, vertical on mobile.
 * Subtle reveal animation on scroll.
 */
export default function Process() {
  return (
    <section className="section-padding surface-white relative overflow-hidden">
      <div className="container-content relative">
        <Reveal>
          <ChapterLabel number="05" label="Our Process" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-10 heading-2 max-w-xl">
            From first idea to finished solution.
          </h2>
        </Reveal>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block mt-16">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-7 left-[12.5%] right-[12.5%] h-px bg-border-l" />
            <div className="absolute top-7 left-[12.5%] h-px bg-electric/30 w-[25%]" />

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.08}>
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-md bg-white border border-border-l relative z-10">
                      <span className="font-display text-sm font-bold text-electric">
                        {step.number}
                      </span>
                    </div>
                    <div className="mt-5">
                      <h3 className="font-display text-lg font-semibold text-midnight">
                        {step.title}
                      </h3>
                      <p className="mt-2 body-sm max-w-[200px]">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden mt-12">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-border-l" />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.05}>
                  <div className="relative flex gap-5">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-white border border-border-l relative z-10">
                      <span className="font-display text-sm font-bold text-electric">
                        {step.number}
                      </span>
                    </div>
                    <div className="pt-1.5">
                      <h3 className="font-display text-lg font-semibold text-midnight">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 body-sm">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
