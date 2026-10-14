import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import ChapterLabel from '../components/ChapterLabel.jsx'
import Button from '../components/Button.jsx'

/**
 * Chapter 07 — Contact
 * Deep navy closing section with understated transition into footer.
 */
export default function ContactCTA() {
  return (
    <section className="surface-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-dark opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric/5 rounded-full blur-[120px]" />

      <div className="container-content relative py-24 md:py-36">
        <Reveal>
          <ChapterLabel number="07" label="Contact" light />
        </Reveal>

        <div className="mt-10 max-w-3xl">
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Have an idea worth building?
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 text-lg text-white/55 leading-relaxed max-w-xl">
              Let's explore how thoughtful design, software, and AI can help
              bring it to life.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10">
              <Button to="/contact" variant="electric" size="lg">
                Start a Project
                <ArrowRight size={18} />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
