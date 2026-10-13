const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the business, its challenges, its users, and its goals.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Develop the concept, experience, and technical approach.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Implement, test, and refine the solution.',
  },
  {
    number: '04',
    title: 'Deliver & Improve',
    description: 'Launch the solution and support future improvements as agreed.',
  },
]

export default function HowWeWork() {
  return (
    <section className="section-padding surface-soft-blue">
      <div className="container-content">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-4">How We Work</p>
          <h2 className="heading-2">From First Idea to Finished Solution</h2>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* Horizontal connecting line on desktop */}
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-brand/20" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex md:block items-center gap-4 md:gap-0">
                  <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-border z-10">
                    <span className="font-bold text-sm text-brand">{step.number}</span>
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
      </div>
    </section>
  )
}
