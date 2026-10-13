import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-navy text-white hover:bg-navy-rich transition-colors duration-200',
  accent:
    'bg-brand text-white hover:bg-brand-hover transition-colors duration-200',
  outline:
    'border border-navy/20 text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-200',
  outlineLight:
    'border border-white/25 text-white hover:bg-white hover:text-navy transition-all duration-200',
  ghost:
    'text-navy hover:text-brand transition-colors duration-200',
  ghostLight:
    'text-white/80 hover:text-white transition-colors duration-200',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`

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
