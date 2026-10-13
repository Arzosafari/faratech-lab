import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../components/Button.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-radial">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Soft glow accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-navy-rich/40 rounded-full blur-[100px]" />

      <div className="container-content relative pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-6">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="eyebrow !text-brand-light mb-5"
            >
              FaraTech — Ideas into Digital Solutions
            </motion.p>

            <motion.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.08]"
            >
              Your Ideas.
              <br />
              Our Technology.
              <br />
              <span className="text-brand-light">Infinite Possibilities.</span>
            </motion.h1>

            <motion.p
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl"
            >
              At FaraTech, we transform innovative ideas into digital experiences, intelligent
              applications, and software solutions designed to move businesses forward.
            </motion.p>

            <motion.div
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button to="/work" size="lg" variant="accent">
                Explore Our Work
                <ArrowRight size={18} />
              </Button>
              <Button to="/contact" variant="outlineLight" size="lg">
                Let's Build Together
              </Button>
            </motion.div>
          </div>

          {/* Visual — abstract system diagram */}
          <motion.div
            custom={0.35}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 hidden lg:flex justify-center"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative w-full max-w-md aspect-square">
      {/* Layered interface cards */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer ring */}
        <div className="absolute w-full h-full rounded-full border border-white/10" />
        <div className="absolute w-[75%] h-[75%] rounded-full border border-white/10" />

        {/* Rotating dashed ring */}
        <svg viewBox="0 0 400 400" className="absolute w-full h-full animate-[spin_40s_linear_infinite]" aria-hidden="true">
          <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="6 8" />
        </svg>

        {/* Central node — layered panels representing software/AI/business */}
        <div className="relative z-10 flex flex-col gap-3">
          {/* Top panel — Software */}
          <div className="w-56 rounded-xl bg-white/95 backdrop-blur-sm shadow-2xl p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-medium text-navy/50 ml-1">studio.faratech</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 rounded-full bg-navy/10 w-3/4" />
              <div className="h-2 rounded-full bg-navy/10 w-full" />
              <div className="h-2 rounded-full bg-navy/10 w-2/3" />
            </div>
            <div className="mt-3 flex gap-2">
              <div className="h-8 flex-1 rounded-lg bg-brand/10 flex items-center justify-center">
                <span className="text-xs font-semibold text-brand">Build</span>
              </div>
              <div className="h-8 w-16 rounded-lg bg-navy/5" />
            </div>
          </div>

          {/* Bottom-left panel — AI */}
          <div className="w-48 -ml-12 rounded-xl bg-navy-rich/80 backdrop-blur-sm shadow-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-brand/30">
                <span className="text-xs text-brand-light font-bold">AI</span>
              </div>
              <span className="text-xs font-medium text-white/80">Intelligence</span>
            </div>
            <div className="flex items-end gap-1 h-10">
              {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-brand-light/60"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Bottom-right panel — Business */}
          <div className="w-44 ml-16 -mt-2 rounded-xl bg-brand-light/90 backdrop-blur-sm shadow-xl p-3 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-navy">Automation</span>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/20">
                <span className="text-[10px] text-brand">⚙</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex-1 h-1.5 rounded-full bg-navy/10" />
              <div className="w-8 h-1.5 rounded-full bg-brand" />
            </div>
            <p className="mt-1.5 text-[10px] text-navy/50">Workflow synced</p>
          </div>
        </div>

        {/* Connecting nodes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <svg viewBox="0 0 400 400" className="w-96 h-96" aria-hidden="true">
            {/* Connection lines from center to outer nodes */}
            <line x1="200" y1="200" x2="200" y2="40" stroke="rgba(232,239,249,0.15)" strokeWidth="1" />
            <line x1="200" y1="200" x2="360" y2="200" stroke="rgba(232,239,249,0.15)" strokeWidth="1" />
            <line x1="200" y1="200" x2="200" y2="360" stroke="rgba(232,239,249,0.15)" strokeWidth="1" />
            <line x1="200" y1="200" x2="40" y2="200" stroke="rgba(232,239,249,0.15)" strokeWidth="1" />

            {/* Outer nodes */}
            <circle cx="200" cy="40" r="6" fill="#4169A8" opacity="0.8" />
            <circle cx="360" cy="200" r="6" fill="#E8EFF9" opacity="0.6" />
            <circle cx="200" cy="360" r="6" fill="#4169A8" opacity="0.8" />
            <circle cx="40" cy="200" r="6" fill="#E8EFF9" opacity="0.6" />

            {/* Pulsing center */}
            <circle cx="200" cy="200" r="4" fill="#E8EFF9" opacity="0.9" />
            <circle cx="200" cy="200" r="12" fill="none" stroke="#E8EFF9" strokeWidth="1" opacity="0.2" />
          </svg>
        </div>
      </div>
    </div>
  )
}
