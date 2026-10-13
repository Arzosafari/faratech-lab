import { ArrowRight } from 'lucide-react'
import Button from '../components/Button.jsx'

export default function FinalCTA() {
  return (
    <section className="bg-navy text-white">
      <div className="container-content py-20 md:py-28 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Have an Idea? Let's Build It Together.
        </h2>
        <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
          Whether you're starting with a new idea or improving an existing business, let's explore
          how technology can help you move forward.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/contact" variant="accent" size="lg">
            Start a Project
            <ArrowRight size={18} />
          </Button>
          <Button
            to="/contact"
            variant="ghost"
            size="lg"
            className="text-white hover:text-white/80"
          >
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  )
}
