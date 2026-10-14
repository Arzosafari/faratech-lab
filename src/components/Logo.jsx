import { Link } from 'react-router-dom'

export default function Logo({ className = '', light = false }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="FaraTech home"
    >
      {/* Geometric mark — two stacked planes suggesting precision + layering */}
      <span className="relative flex h-8 w-8 items-center justify-center">
        <span
          className={`absolute inset-0 rounded-[5px] border ${
            light ? 'border-white/30' : 'border-midnight/20'
          }`}
        />
        <span
          className={`absolute left-[7px] top-[7px] h-[18px] w-[18px] rounded-[3px] ${
            light ? 'bg-white/15' : 'bg-midnight/8'
          }`}
        />
        <span className="absolute left-[11px] top-[11px] h-3 w-3 rounded-[2px] bg-electric" />
      </span>
      <span
        className={`font-display text-lg font-bold tracking-tight ${
          light ? 'text-white' : 'text-midnight'
        }`}
      >
        FaraTech
      </span>
    </Link>
  )
}
