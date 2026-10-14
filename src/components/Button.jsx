import { Link } from 'react-router-dom'

const variants = {
  // Reference CTA — solid light pill with ink text
  light: 'bg-mist text-ink hover:bg-white',
  // Structural accent — used sparingly
  ember: 'bg-ember text-ink hover:bg-ember-hover',
  // Ghost outline pill
  outline: 'border border-line-strong text-mist hover:bg-white/5 hover:border-mist',
  ghost: 'text-mist-dim hover:text-mist',
}

const sizes = {
  sm: 'px-5 py-2.5 text-[13px]',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-[15px]',
}

export default function Button({
  children,
  to,
  href,
  variant = 'light',
  size = 'md',
  className = '',
  ...props
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
