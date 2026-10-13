import SectionHeading from '../components/SectionHeading.jsx'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understand the business, its challenges, its users, and its goals.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Develop the concept, experience, and technical approach.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Implement, test, and refine the solution.',
  },
  {
    number: '04',
    title: 'Deliver & Improve',
    description:
      'Launch the solution and support future improvements as agreed.',
  },
]

export default function HowWeWork() {
  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <SectionHeading
          eyebrow="How We Work"
          title="From First Idea to Finished Solution"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connecting line on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[60%] right-[-25%] h-px bg-border" />
              )}

              <div className="relative flex md:block items-center gap-4 md:gap-0">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-navy text-white font-semibold text-sm z-10 relative">
                  {step.number}
                </div>
                <div className="md:mt-5">
                  <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                  <p className="mt-1.5 text-body text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
