import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../components/Button.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const heroRef = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [canHover, setCanHover] = useState(false)

  useEffect(() => {
    setCanHover(window.matchMedia('(pointer: fine)').matches)
  }, [])

  const handleMouseMove = (e) => {
    if (!heroRef.current || !canHover) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    setMouse({ x, y })
  }

  const layerStyle = (depth) => ({
    transform: canHover
      ? `translate3d(${mouse.x * depth}px, ${mouse.y * depth}px, 0)`
      : 'none',
    transition: 'transform 0.2s ease-out',
  })

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-midnight-radial min-h-screen flex items-center"
    >
      {/* Atmospheric layers */}
      <div className="absolute inset-0 grid-dark opacity-40" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-deep-blue/30 rounded-full blur-[120px]" />

      <div className="container-content relative pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ── Text ── */}
          <div className="lg:col-span-7">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="label-light mb-6"
            >
              FaraTech — Digital Atelier
            </motion.p>

            <motion.h1
              custom={0.08}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display text-[2.5rem] md:text-5xl lg:text-[4rem] font-bold text-white tracking-tightest leading-[1.04]"
            >
              Your Ideas.
              <br />
              Our Technology.
              <br />
              <span className="text-electric">Infinite Possibilities.</span>
            </motion.h1>

            <motion.p
              custom={0.16}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-7 text-lg text-white/55 leading-relaxed max-w-lg"
            >
              We turn ambitious ideas into digital experiences, intelligent
              applications, and software solutions built around real business
              needs.
            </motion.p>

            <motion.div
              custom={0.24}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-9 flex flex-col sm:flex-row gap-3"
            >
              <Button to="/work" size="lg" variant="electric">
                Explore Our Work
                <ArrowRight size={18} />
              </Button>
              <Button to="/contact" variant="outlineLight" size="lg">
                Start a Project
              </Button>
            </motion.div>
          </div>

          {/* ── Visual composition ── */}
          <motion.div
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 hidden lg:flex justify-center items-center relative h-[460px]"
          >
            <HeroVisual layerStyle={layerStyle} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function HeroVisual({ layerStyle }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* ── Back layer: SVG network ── */}
      <div className="absolute inset-0" style={layerStyle(6)}>
        <svg
          viewBox="0 0 400 460"
          className="w-full h-full"
          fill="none"
          aria-hidden="true"
        >
          {/* Connection lines from center to nodes */}
          <line x1="200" y1="230" x2="200" y2="60" stroke="rgba(110,145,255,0.15)" strokeWidth="1" />
          <line x1="200" y1="230" x2="340" y2="160" stroke="rgba(110,145,255,0.15)" strokeWidth="1" />
          <line x1="200" y1="230" x2="340" y2="320" stroke="rgba(110,145,255,0.15)" strokeWidth="1" />
          <line x1="200" y1="230" x2="60" y2="320" stroke="rgba(110,145,255,0.15)" strokeWidth="1" />
          <line x1="200" y1="230" x2="60" y2="160" stroke="rgba(110,145,255,0.15)" strokeWidth="1" />

          {/* Outer ring */}
          <circle cx="200" cy="230" r="180" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <circle cx="200" cy="230" r="130" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 6" />

          {/* Nodes */}
          <circle cx="200" cy="60" r="4" fill="#6E91FF" opacity="0.7" />
          <circle cx="340" cy="160" r="4" fill="#8295B4" opacity="0.5" />
          <circle cx="340" cy="320" r="4" fill="#6E91FF" opacity="0.7" />
          <circle cx="60" cy="320" r="4" fill="#8295B4" opacity="0.5" />
          <circle cx="60" cy="160" r="4" fill="#6E91FF" opacity="0.7" />

          {/* Center node */}
          <circle cx="200" cy="230" r="6" fill="#6E91FF" />
          <circle cx="200" cy="230" r="14" fill="none" stroke="#6E91FF" strokeWidth="1" opacity="0.2" />

          {/* Node labels */}
          <text x="200" y="46" fill="rgba(130,149,180,0.6)" fontSize="9" fontFamily="Inter" textAnchor="middle" letterSpacing="1.5">IDEA</text>
          <text x="354" y="164" fill="rgba(130,149,180,0.6)" fontSize="9" fontFamily="Inter" letterSpacing="1.5">DESIGN</text>
          <text x="354" y="324" fill="rgba(130,149,180,0.6)" fontSize="9" fontFamily="Inter" letterSpacing="1.5">AI</text>
          <text x="46" y="324" fill="rgba(130,149,180,0.6)" fontSize="9" fontFamily="Inter" textAnchor="end" letterSpacing="1.5">BUILD</text>
          <text x="46" y="164" fill="rgba(130,149,180,0.6)" fontSize="9" fontFamily="Inter" textAnchor="end" letterSpacing="1.5">SHIP</text>
        </svg>
      </div>

      {/* ── Mid layer: interface preview card ── */}
      <div
        className="absolute top-[14%] left-[8%] w-52 rounded-lg bg-white/95 shadow-2xl p-3.5 border border-white/10"
        style={layerStyle(14)}
      >
        <div className="flex items-center gap-1.5 mb-2.5">
          <span className="w-2 h-2 rounded-full bg-red-400/70" />
          <span className="w-2 h-2 rounded-full bg-amber-400/70" />
          <span className="w-2 h-2 rounded-full bg-green-400/70" />
          <span className="text-[9px] font-medium text-midnight/40 ml-1.5 tracking-wide">studio.faratech</span>
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 rounded-full bg-midnight/8 w-3/4" />
          <div className="h-1.5 rounded-full bg-midnight/8 w-full" />
          <div className="h-1.5 rounded-full bg-midnight/8 w-5/6" />
        </div>
        <div className="mt-2.5 flex gap-1.5">
          <div className="h-6 flex-1 rounded bg-electric/10 flex items-center justify-center">
            <span className="text-[9px] font-semibold text-electric">Build</span>
          </div>
          <div className="h-6 w-12 rounded bg-midnight/5" />
        </div>
      </div>

      {/* ── Front layer: AI/data card ── */}
      <div
        className="absolute bottom-[16%] right-[6%] w-44 rounded-lg bg-deep-blue/90 backdrop-blur-sm shadow-xl p-3.5 border border-border-d"
        style={layerStyle(22)}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-electric/20">
            <span className="text-[8px] text-electric font-bold">AI</span>
          </div>
          <span className="text-[9px] font-medium text-white/70 tracking-wide">Intelligence</span>
        </div>
        <div className="flex items-end gap-1 h-9">
          {[40, 65, 50, 80, 60, 90, 70, 55].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-electric/40"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex-1 h-1 rounded-full bg-white/10" />
          <div className="w-6 h-1 rounded-full bg-electric" />
        </div>
        <p className="mt-1.5 text-[8px] text-white/40">Processing</p>
      </div>

      {/* ── Front layer: automation indicator ── */}
      <div
        className="absolute top-[44%] right-[2%] w-32 rounded-lg bg-ivory/90 shadow-lg p-2.5 border border-white/10"
        style={layerStyle(28)}
      >
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] font-semibold text-midnight">Automation</span>
          <span className="text-[8px] text-electric">●</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex-1 h-1 rounded-full bg-midnight/10" />
          <div className="w-6 h-1 rounded-full bg-electric" />
        </div>
        <p className="mt-1 text-[8px] text-midnight/40">Workflow synced</p>
      </div>
    </div>
  )
}
