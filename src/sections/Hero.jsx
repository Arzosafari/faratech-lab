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
    <section className="relative overflow-hidden bg-white">
      <div className="container-content pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-sm font-semibold uppercase tracking-wider text-accent mb-5"
            >
              FaraTech — Ideas into Digital Solutions
            </motion.p>

            <motion.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy tracking-tight leading-[1.1]"
            >
              Your Ideas.
              <br />
              Our Technology.
              <br />
              <span className="text-accent">Infinite Possibilities.</span>
            </motion.h1>

            <motion.p
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-lg text-body leading-relaxed max-w-xl"
            >
              At FaraTech, we turn innovative ideas into powerful digital experiences. From modern
              websites and custom software to intelligent AI solutions and business automation, we
              help businesses transform possibilities into practical technology.
            </motion.p>

            <motion.div
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button to="/work" size="lg">
                Explore Our Work
                <ArrowRight size={18} />
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Let's Build Together
              </Button>
            </motion.div>
          </div>

          {/* Visual signature */}
          <motion.div
            custom={0.35}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-square">
              {/* Abstract geometric composition representing ideas → design → software → intelligence */}
              <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
                {/* Outer ring */}
                <circle cx="200" cy="200" r="180" fill="none" stroke="#E3E8EF" strokeWidth="1" />
                <circle cx="200" cy="200" r="140" fill="none" stroke="#E3E8EF" strokeWidth="1" />

                {/* Connecting lines */}
                <line x1="200" y1="60" x2="200" y2="340" stroke="#E3E8EF" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="60" y1="200" x2="340" y2="200" stroke="#E3E8EF" strokeWidth="1" strokeDasharray="4 4" />

                {/* Nodes representing the four pillars */}
                <g>
                  <circle cx="200" cy="60" r="28" fill="#102443" />
                  <text x="200" y="66" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">IDEAS</text>
                </g>
                <g>
                  <circle cx="340" cy="200" r="28" fill="#19385F" />
                  <text x="340" y="206" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif">DESIGN</text>
                </g>
                <g>
                  <circle cx="200" cy="340" r="28" fill="#2563EB" />
                  <text x="200" y="346" textAnchor="middle" fill="white" fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif">SOFTWARE</text>
                </g>
                <g>
                  <circle cx="60" cy="200" r="28" fill="#19385F" />
                  <text x="60" y="206" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif">AI</text>
                </g>

                {/* Center mark */}
                <circle cx="200" cy="200" r="8" fill="#102443" />
                <circle cx="200" cy="200" r="16" fill="none" stroke="#102443" strokeWidth="1.5" opacity="0.3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
