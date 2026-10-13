import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="FaraTech home">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-white font-extrabold text-lg leading-none">
        F
      </span>
      <span className="font-bold text-navy text-xl tracking-tight">FaraTech</span>
    </Link>
  )
}
