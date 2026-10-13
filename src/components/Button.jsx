import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-navy text-white hover:bg-navy-secondary transition-colors duration-200',
  accent:
    'bg-accent text-white hover:bg-accent-hover transition-colors duration-200',
  outline:
    'border border-navy text-navy hover:bg-navy hover:text-white transition-colors duration-200',
  ghost:
    'text-navy hover:text-accent transition-colors duration-200',
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
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`

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
