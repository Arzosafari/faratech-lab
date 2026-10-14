import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Button from '../components/Button.jsx'

const ease = [0.16, 1, 0.3, 1]

const rail = ['Websites', 'Software', 'AI Solutions', 'Automation']

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-radial">
      {/* Warm amber flares behind the composition */}
      <div className="pointer-events-none absolute -top-48 right-[-12%] h-[520px] w-[520px] rounded-full bg-flare blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[-25%] left-[-10%] h-[420px] w-[420px] rounded-full bg-flare opacity-70 blur-[150px]" />

      {/* Ambient gradient sculpture */}
      <div className="pointer-events-none absolute right-[-6%] top-1/4 hidden h-[420px] w-[420px] animate-drift lg:block">
        <div className="hero-orb h-full w-full rounded-full" />
        <div className="absolute inset-[-6%] rounded-full border border-line" />
        <div className="absolute inset-[14%] rounded-full border border-line" />
      </div>

      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />

      <div className="container-content relative pb-20 pt-36 md:pb-28 md:pt-44">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="label"
        >
          FaraTech — Digital Studio
        </motion.p>

        <div className="mt-12 grid grid-cols-1 items-end gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="display"
            >
              Your Ideas.
              <br />
              Our Technology.
              <br />
              <span className="gradient-text">Infinite Possibilities.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="lg:col-span-4 lg:pb-3"
          >
            <p className="lead max-w-measure">
              We turn ideas into modern websites, custom software, and AI solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact" variant="light">
                Start a Project
                <ArrowUpRight size={16} />
              </Button>
              <Button to="/work" variant="outline">
                View Work
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Left rail — micro stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="hairline mt-20 flex flex-wrap gap-x-10 gap-y-4 pt-8"
        >
          {rail.map((item) => (
            <span key={item} className="label">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
