import { Target, Users, Cpu, Handshake } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'

const principles = [
  {
    icon: Target,
    title: 'Purpose-driven development',
    description: 'Technology should solve a real problem.',
  },
  {
    icon: Users,
    title: 'User-centered experiences',
    description: 'Products should be clear and easy to use.',
  },
  {
    icon: Cpu,
    title: 'Intelligent engineering',
    description: 'Choose appropriate tools instead of adding complexity unnecessarily.',
  },
  {
    icon: Handshake,
    title: 'Collaborative development',
    description: 'Work closely with clients from the initial idea through implementation.',
  },
]

export default function WhyFaraTech() {
  return (
    <section className="section-padding bg-navy-light">
      <div className="container-content">
        <SectionHeading
          eyebrow="Why FaraTech"
          title="Thoughtful Technology. Practical Results."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
          {principles.map((principle) => (
            <div key={principle.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white border border-border">
                  <principle.icon size={20} className="text-navy" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy">
                  {principle.title}
                </h3>
                <p className="mt-1.5 text-body leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
