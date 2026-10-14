import { ArrowRight } from 'lucide-react'
import Button from '../components/Button.jsx'

export default function FinalCTA() {
  return (
    <section className="bg-navy-radial text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/10 rounded-full blur-[120px]" />

      <div className="container-content relative py-20 md:py-32 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Have an Idea? Let's Build It Together.
        </h2>
        <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
          Whether you're starting with a new idea or improving an existing business, let's explore
          how technology can help you move forward.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/contact" variant="accent" size="lg">
            Start a Project
            <ArrowRight size={18} />
          </Button>
          <Button to="/contact" variant="outlineLight" size="lg">
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  )
}
