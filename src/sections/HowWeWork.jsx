import Reveal from '../components/Reveal.jsx'

const steps = [
  { number: '01', title: 'Discover', description: 'Understand the problem, the users, and the goal.' },
  { number: '02', title: 'Design', description: 'Shape the experience and the technical approach.' },
  { number: '03', title: 'Build', description: 'Implement, test, and refine the solution.' },
  { number: '04', title: 'Deliver', description: 'Launch, then keep improving as you grow.' },
]

export default function HowWeWork() {
  return (
    <section className="section">
      <div className="container-content">
        <Reveal>
          <p className="label mb-6">03 — How We Work</p>
          <h2 className="display-sm max-w-xl">From first idea to finished solution</h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.06} className="bg-ink p-8 md:p-9">
              <span className="label !text-ember">{step.number}</span>
              <h3 className="mt-6 text-xl font-semibold text-mist">{step.title}</h3>
              <p className="body-text mt-3">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
