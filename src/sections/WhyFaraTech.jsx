import Reveal from '../components/Reveal.jsx'

const principles = [
  { number: '01', title: 'Purpose-driven', description: 'We start with the real problem.' },
  { number: '02', title: 'User-centered', description: 'Interfaces that feel obvious.' },
  { number: '03', title: 'Intelligent engineering', description: 'The right tool, not the trendy one.' },
  { number: '04', title: 'Collaborative', description: 'Open progress, from first call to delivery.' },
]

export default function WhyFaraTech() {
  return (
    <section className="section bg-ink-soft">
      <div className="container-content">
        <Reveal>
          <p className="label mb-6">04 — Why FaraTech</p>
          <h2 className="display-sm max-w-xl">Thoughtful technology. Practical results.</h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 0.06} className="bg-ink p-8 md:p-9">
              <span className="label">{principle.number}</span>
              <h3 className="mt-6 text-xl font-semibold text-mist">{principle.title}</h3>
              <p className="body-text mt-3">{principle.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
