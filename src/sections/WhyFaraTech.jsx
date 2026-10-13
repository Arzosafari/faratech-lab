import { Target, Users, Cpu, Handshake } from 'lucide-react'

const principles = [
  {
    icon: Target,
    title: 'Purpose-driven development',
    description: 'Technology should solve a real problem. We start every project by understanding what you actually need to achieve.',
  },
  {
    icon: Users,
    title: 'User-centered experiences',
    description: 'Products should be clear and easy to use. We design interfaces that feel intuitive and serve the people who rely on them.',
  },
  {
    icon: Cpu,
    title: 'Intelligent engineering',
    description: 'We choose appropriate tools over unnecessary complexity, building solutions that are maintainable and built to last.',
  },
  {
    icon: Handshake,
    title: 'Collaborative development',
    description: 'We work closely with clients from the initial idea through implementation, sharing progress openly at every step.',
  },
]

export default function WhyFaraTech() {
  return (
    <section className="section-padding surface-cream">
      <div className="container-content">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-4">Why FaraTech</p>
          <h2 className="heading-2">Thoughtful Technology. Practical Results.</h2>
        </div>

        {/* Bento-style grid — different from Services layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className={`rounded-2xl p-7 card-hover ${
                index === 0
                  ? 'bg-navy text-white lg:col-span-2 lg:row-span-1'
                  : index === 3
                    ? 'bg-brand-light border border-border'
                    : 'bg-white border border-border'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    index === 0
                      ? 'bg-white/10 text-brand-light'
                      : index === 3
                        ? 'bg-brand text-white'
                        : 'bg-brand-light text-brand'
                  }`}
                >
                  <principle.icon size={20} />
                </div>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${index === 0 ? 'text-white' : 'text-navy'}`}>
                {principle.title}
              </h3>
              <p className={`text-sm leading-relaxed ${index === 0 ? 'text-white/70' : 'text-body'}`}>
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
