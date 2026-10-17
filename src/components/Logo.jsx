import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-baseline gap-2 ${className}`}
      aria-label="FaraTech home"
    >
      <span className="text-xl font-extrabold tracking-tight text-mist">FaraTech</span>
      <span className="h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-ember transition-transform duration-300 group-hover:scale-125" />
    </Link>
  )
}
